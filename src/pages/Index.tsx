import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPoster, setSelectedPoster] = useState<number | null>(null);

  const posters = [
    {
      id: 1,
      title: 'БРОМО',
      subtitle: 'Инновации в действии',
      gradient: 'from-[#FF6B00] via-[#FF8C42] to-[#FF6B00]',
      pattern: 'hexagon-large',
    },
    {
      id: 2,
      title: 'БРОМО',
      subtitle: 'Двигайся вперёд',
      gradient: 'from-[#FF8C42] via-[#FF6B00] to-[#FF4500]',
      pattern: 'hexagon-grid',
    },
    {
      id: 3,
      title: 'БРОМО',
      subtitle: 'Сила технологий',
      gradient: 'from-[#FF4500] via-[#FF6B00] to-[#FF8C42]',
      pattern: 'hexagon-scattered',
    },
  ];

  const handleDownload = (posterId: number) => {
    const posterElement = document.getElementById(`poster-${posterId}`);
    if (!posterElement) return;

    const canvas = document.createElement('canvas');
    canvas.width = 2480;
    canvas.height = 3508;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const link = document.createElement('a');
    link.download = `bromo-poster-${posterId}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src="https://cdn.poehali.dev/files/1e9028d0-7161-4f94-9b89-26a3e5a56906.PNG" 
              alt="БРОМО" 
              className="h-16 object-contain"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Коллекция постеров БРОМО
          </h1>
          <p className="text-muted-foreground text-lg">
            Современные дизайны для печати в форматах A3/A4
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posters.map((poster, index) => (
            <Card
              key={poster.id}
              className="overflow-hidden hover-scale cursor-pointer group relative"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedPoster(poster.id)}
            >
              <div
                id={`poster-${poster.id}`}
                className="aspect-[1/1.4] relative bg-gradient-to-br p-12 flex flex-col justify-between"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, #FF6B00, #FF8C42, #FF6B00)`,
                }}
              >
                <div className="absolute inset-0 opacity-10">
                  {poster.pattern === 'hexagon-large' && (
                    <svg className="w-full h-full" viewBox="0 0 400 600">
                      <polygon points="200,50 350,125 350,275 200,350 50,275 50,125" fill="none" stroke="white" strokeWidth="2" />
                      <polygon points="200,200 300,250 300,350 200,400 100,350 100,250" fill="none" stroke="white" strokeWidth="2" />
                    </svg>
                  )}
                  {poster.pattern === 'hexagon-grid' && (
                    <svg className="w-full h-full" viewBox="0 0 400 600">
                      {[...Array(3)].map((_, row) =>
                        [...Array(3)].map((_, col) => (
                          <polygon
                            key={`${row}-${col}`}
                            points={`${100 + col * 100},${100 + row * 150} ${150 + col * 100},${75 + row * 150} ${200 + col * 100},${100 + row * 150} ${200 + col * 100},${150 + row * 150} ${150 + col * 100},${175 + row * 150} ${100 + col * 100},${150 + row * 150}`}
                            fill="none"
                            stroke="white"
                            strokeWidth="1"
                          />
                        ))
                      )}
                    </svg>
                  )}
                  {poster.pattern === 'hexagon-scattered' && (
                    <svg className="w-full h-full" viewBox="0 0 400 600">
                      <polygon points="80,100 130,75 180,100 180,150 130,175 80,150" fill="white" opacity="0.3" />
                      <polygon points="250,150 300,125 350,150 350,200 300,225 250,200" fill="white" opacity="0.2" />
                      <polygon points="100,350 150,325 200,350 200,400 150,425 100,400" fill="white" opacity="0.25" />
                      <polygon points="280,400 330,375 380,400 380,450 330,475 280,450" fill="white" opacity="0.15" />
                    </svg>
                  )}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 mb-4">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="#FF6B00" stroke="#1A1A1A" strokeWidth="3" />
                    </svg>
                  </div>
                </div>

                <div className="relative z-10 text-center">
                  <h2 className="text-6xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
                    {poster.title}
                  </h2>
                  <p className="text-xl text-white font-medium">
                    {poster.subtitle}
                  </p>
                </div>

                <div className="relative z-10 flex justify-center">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 border-2 border-white/30 backdrop-blur-sm" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                    <div className="w-8 h-8 border-2 border-white/20 backdrop-blur-sm" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">Постер #{poster.id}</p>
                    <p className="text-xs text-muted-foreground">A3/A4 формат</p>
                  </div>
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(poster.id);
                    }}
                    className="gap-2"
                  >
                    <Icon name="Download" size={16} />
                    Скачать
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <div className="flex items-start gap-6">
            <div className="bg-primary/10 p-4 rounded-lg">
              <Icon name="Info" size={32} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">О постерах</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Форматы A3/A4</p>
                    <p>Готовы к печати в типографии</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Palette" size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Яркие градиенты</p>
                    <p>Актуальные трендовые цвета</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Hexagon" size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Фирменный стиль</p>
                    <p>Логотип и шестигранники БРОМО</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Sparkles" size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Современный дизайн</p>
                    <p>Минимализм и геометрия</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
