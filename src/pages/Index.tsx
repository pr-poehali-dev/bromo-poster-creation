import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const posters = [
    {
      id: 1,
      quote: 'СОЗДАВАЙ\nБУДУЩЕЕ',
      description: 'Каждый день — новая возможность',
    },
    {
      id: 2,
      quote: 'ДВИГАЙСЯ\nВПЕРЁД',
      description: 'Путь к успеху начинается с первого шага',
    },
    {
      id: 3,
      quote: 'ВЕРЬ\nВ СЕБЯ',
      description: 'Твоя сила — в твоих руках',
    },
    {
      id: 4,
      quote: 'БУДЬ\nЛУЧШЕ',
      description: 'Совершенствуйся каждый день',
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
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <img 
            src="https://cdn.poehali.dev/files/364ad1f2-8e41-466f-bb39-f7295ef4ad7b.PNG" 
            alt="БРОМО" 
            className="h-20 object-contain mx-auto mb-8"
          />
          <h1 className="text-5xl font-bold mb-4 text-[#1A1A1A]">
            Мотивационные постеры БРОМО
          </h1>
          <p className="text-[#666] text-lg">
            Минималистичная серия для печати в форматах A3/A4
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {posters.map((poster, index) => (
            <Card
              key={poster.id}
              className="overflow-hidden hover-scale group bg-white shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                id={`poster-${poster.id}`}
                className="aspect-[1/1.4] relative bg-white p-12 flex flex-col justify-between"
              >
                <div className="relative z-10 flex justify-center mb-auto">
                  <img 
                    src="https://cdn.poehali.dev/files/364ad1f2-8e41-466f-bb39-f7295ef4ad7b.PNG" 
                    alt="БРОМО" 
                    className="w-24 h-24 object-contain opacity-90"
                  />
                </div>

                <div className="relative z-10 text-center my-auto">
                  <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight whitespace-pre-line tracking-tight">
                    {poster.quote}
                  </h2>
                  <div className="w-16 h-1 bg-[#FF6B00] mx-auto mb-6"></div>
                  <p className="text-sm text-[#666] font-normal">
                    {poster.description}
                  </p>
                </div>

                <div className="relative z-10 flex justify-center mt-auto">
                  <div className="text-xs text-[#999] font-medium">БРОМО</div>
                </div>
              </div>

              <div className="p-4 bg-white border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-[#1A1A1A]">Постер {poster.id}/4</p>
                    <p className="text-xs text-[#666]">A3/A4 формат</p>
                  </div>
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(poster.id);
                    }}
                    className="gap-2 bg-[#FF6B00] hover:bg-[#FF8C42]"
                  >
                    <Icon name="Download" size={16} />
                    Скачать
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-white shadow-lg border-[#E5E5E5]">
          <div className="flex items-start gap-6">
            <div className="bg-[#FF6B00]/10 p-4 rounded-lg">
              <Icon name="Info" size={32} className="text-[#FF6B00]" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">О коллекции</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="flex items-start gap-3">
                  <Icon name="Frame" size={20} className="text-[#FF6B00] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Готовы к печати</p>
                    <p className="text-[#666]">Форматы A3 (297×420 мм) и A4 (210×297 мм) для рамок</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Sparkles" size={20} className="text-[#FF6B00] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Минимализм</p>
                    <p className="text-[#666]">Чистый дизайн, который впишется в любой интерьер</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Zap" size={20} className="text-[#FF6B00] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Мотивация</p>
                    <p className="text-[#666]">Вдохновляющие цитаты для ежедневного настроя</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Hexagon" size={20} className="text-[#FF6B00] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Фирменный стиль</p>
                    <p className="text-[#666]">Логотип БРОМО на каждом постере</p>
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
