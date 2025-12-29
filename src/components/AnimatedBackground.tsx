import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      pulse: number;
    }

    interface DataStream {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      progress: number;
      speed: number;
      length: number;
    }

    interface HexNode {
      x: number;
      y: number;
      size: number;
      alpha: number;
      connections: number[];
    }

    interface CodeLine {
      y: number;
      chars: string;
      x: number;
      speed: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    const dataStreams: DataStream[] = [];
    const hexNodes: HexNode[] = [];
    const codeLines: CodeLine[] = [];

    // Initialize particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Initialize data streams
    for (let i = 0; i < 25; i++) {
      dataStreams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        targetX: Math.random() * canvas.width,
        targetY: Math.random() * canvas.height,
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.003,
        length: 50 + Math.random() * 100,
      });
    }

    // Initialize hex nodes (circuit-like pattern)
    const nodeCount = 20;
    for (let i = 0; i < nodeCount; i++) {
      hexNodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 4 + Math.random() * 4,
        alpha: 0.3 + Math.random() * 0.3,
        connections: [],
      });
    }

    // Create connections between nearby nodes
    for (let i = 0; i < hexNodes.length; i++) {
      for (let j = i + 1; j < hexNodes.length; j++) {
        const dx = hexNodes[i].x - hexNodes[j].x;
        const dy = hexNodes[i].y - hexNodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 300 && hexNodes[i].connections.length < 3) {
          hexNodes[i].connections.push(j);
        }
      }
    }

    // Initialize code lines (matrix-like falling code)
    const codeChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    for (let i = 0; i < 15; i++) {
      const chars = Array.from({ length: 8 + Math.floor(Math.random() * 12) }, () => 
        codeChars[Math.floor(Math.random() * codeChars.length)]
      ).join('');
      codeLines.push({
        y: Math.random() * canvas.height,
        chars,
        x: Math.random() * canvas.width,
        speed: 0.5 + Math.random() * 1.5,
        alpha: 0.1 + Math.random() * 0.2,
      });
    }

    const drawGrid = () => {
      const gridSize = 50;
      const time = Date.now() * 0.0003;
      
      // Main grid
      ctx.strokeStyle = 'rgba(0, 200, 83, 0.04)';
      ctx.lineWidth = 1;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Animated highlight lines
      for (let i = 0; i < 3; i++) {
        const yPos = ((time * 100 + i * 300) % canvas.height);
        const gradient = ctx.createLinearGradient(0, yPos - 2, 0, yPos + 2);
        gradient.addColorStop(0, 'rgba(0, 200, 83, 0)');
        gradient.addColorStop(0.5, 'rgba(0, 200, 83, 0.15)');
        gradient.addColorStop(1, 'rgba(0, 200, 83, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, yPos - 2, canvas.width, 4);
      }
    };

    const drawCircuitNodes = () => {
      const time = Date.now() * 0.001;

      // Draw connections first
      hexNodes.forEach((node, i) => {
        node.connections.forEach((targetIdx) => {
          const target = hexNodes[targetIdx];
          
          // Animated line
          const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y);
          const pulse = (Math.sin(time + i * 0.5) + 1) / 2;
          gradient.addColorStop(0, `rgba(0, 200, 83, ${0.05 + pulse * 0.1})`);
          gradient.addColorStop(0.5, `rgba(0, 200, 83, ${0.1 + pulse * 0.15})`);
          gradient.addColorStop(1, `rgba(0, 200, 83, ${0.05 + pulse * 0.1})`);
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Data packet animation
          const packetPos = (time * 0.3 + i * 0.2) % 1;
          const packetX = node.x + (target.x - node.x) * packetPos;
          const packetY = node.y + (target.y - node.y) * packetPos;
          
          ctx.beginPath();
          ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 255, 100, ${0.5 + pulse * 0.3})`;
          ctx.fill();
        });
      });

      // Draw nodes
      hexNodes.forEach((node, i) => {
        const pulse = (Math.sin(time * 2 + i * 0.7) + 1) / 2;
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 200, 83, ${0.05 + pulse * 0.05})`;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 200, 83, ${node.alpha + pulse * 0.2})`;
        ctx.fill();

        // Inner bright core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 255, 150, ${0.6 + pulse * 0.3})`;
        ctx.fill();
      });
    };

    const drawParticles = () => {
      const time = Date.now() * 0.002;

      particles.forEach((p) => {
        const pulse = Math.sin(time + p.pulse) * 0.3 + 0.7;
        
        // Particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 200, 83, ${p.alpha * 0.2 * pulse})`;
        ctx.fill();

        // Particle core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 100, ${p.alpha * pulse})`;
        ctx.fill();

        // Update position with slight mouse attraction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200) {
          p.vx += (dx / dist) * 0.01;
          p.vy += (dy / dist) * 0.01;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
    };

    const drawDataStreams = () => {
      dataStreams.forEach((stream) => {
        const currentX = stream.x + (stream.targetX - stream.x) * stream.progress;
        const currentY = stream.y + (stream.targetY - stream.y) * stream.progress;
        
        const angle = Math.atan2(stream.targetY - stream.y, stream.targetX - stream.x);
        const tailX = currentX - Math.cos(angle) * stream.length * (1 - stream.progress);
        const tailY = currentY - Math.sin(angle) * stream.length * (1 - stream.progress);

        const gradient = ctx.createLinearGradient(tailX, tailY, currentX, currentY);
        gradient.addColorStop(0, 'rgba(0, 200, 83, 0)');
        gradient.addColorStop(0.8, 'rgba(0, 200, 83, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 255, 100, 0.8)');

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Head glow
        ctx.beginPath();
        ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 100, 0.8)';
        ctx.fill();

        stream.progress += stream.speed;
        if (stream.progress > 1) {
          stream.progress = 0;
          stream.x = stream.targetX;
          stream.y = stream.targetY;
          stream.targetX = Math.random() * canvas.width;
          stream.targetY = Math.random() * canvas.height;
        }
      });
    };

    const drawCodeRain = () => {
      ctx.font = '12px JetBrains Mono, monospace';
      
      codeLines.forEach((line) => {
        for (let i = 0; i < line.chars.length; i++) {
          const charY = line.y + i * 14;
          const fade = 1 - (i / line.chars.length);
          ctx.fillStyle = `rgba(0, 200, 83, ${line.alpha * fade})`;
          ctx.fillText(line.chars[i], line.x, charY);
        }

        line.y += line.speed;
        if (line.y > canvas.height + line.chars.length * 14) {
          line.y = -line.chars.length * 14;
          line.x = Math.random() * canvas.width;
        }
      });
    };

    const drawFloatingPanels = () => {
      const time = Date.now() * 0.0003;
      
      for (let i = 0; i < 6; i++) {
        const x = Math.sin(time + i * 1.2) * 80 + canvas.width * (0.15 + i * 0.12);
        const y = Math.cos(time * 0.7 + i * 1.8) * 40 + canvas.height * (0.2 + (i % 3) * 0.2);
        const width = 120 + i * 25;
        const height = 80 + i * 15;
        const alpha = 0.03 + Math.sin(time * 2 + i) * 0.01;

        // Panel fill
        ctx.fillStyle = `rgba(0, 200, 83, ${alpha})`;
        ctx.fillRect(x, y, width, height);
        
        // Panel border
        ctx.strokeStyle = `rgba(0, 200, 83, ${alpha * 2})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, width, height);

        // Corner accents
        const cornerSize = 8;
        ctx.strokeStyle = `rgba(0, 255, 100, ${alpha * 3})`;
        ctx.lineWidth = 2;
        
        // Top-left
        ctx.beginPath();
        ctx.moveTo(x, y + cornerSize);
        ctx.lineTo(x, y);
        ctx.lineTo(x + cornerSize, y);
        ctx.stroke();
        
        // Top-right
        ctx.beginPath();
        ctx.moveTo(x + width - cornerSize, y);
        ctx.lineTo(x + width, y);
        ctx.lineTo(x + width, y + cornerSize);
        ctx.stroke();
        
        // Bottom-right
        ctx.beginPath();
        ctx.moveTo(x + width, y + height - cornerSize);
        ctx.lineTo(x + width, y + height);
        ctx.lineTo(x + width - cornerSize, y + height);
        ctx.stroke();
        
        // Bottom-left
        ctx.beginPath();
        ctx.moveTo(x + cornerSize, y + height);
        ctx.lineTo(x, y + height);
        ctx.lineTo(x, y + height - cornerSize);
        ctx.stroke();
      }
    };

    const drawMouseGlow = () => {
      if (mouseX && mouseY) {
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 150);
        gradient.addColorStop(0, 'rgba(0, 200, 83, 0.1)');
        gradient.addColorStop(0.5, 'rgba(0, 200, 83, 0.03)');
        gradient.addColorStop(1, 'rgba(0, 200, 83, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(mouseX - 150, mouseY - 150, 300, 300);
      }
    };

    const animate = () => {
      // Clear with fade effect
      ctx.fillStyle = 'rgba(8, 12, 8, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid();
      drawFloatingPanels();
      drawCodeRain();
      drawCircuitNodes();
      drawDataStreams();
      drawParticles();
      drawMouseGlow();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initial clear
    ctx.fillStyle = 'rgb(8, 12, 8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: 'rgb(8, 12, 8)' }}
    />
  );
};

export default AnimatedBackground;
