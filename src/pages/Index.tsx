import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const posters = [
    {
      id: 1,
      title: 'ВМЕСТЕ МЫ — СИЛА',
      subtitle: 'Команда профессионалов строит будущее',
      image: 'https://cdn.poehali.dev/projects/3c738235-f3f5-4d0b-a3d4-974e185b7957/files/5d6f255c-fce1-4d34-8a8f-5fa5e8e438c0.jpg',
      bgColor: '#0090D9',
    },
    {
      id: 2,
      title: 'К НОВЫМ ВЫСОТАМ',
      subtitle: 'Каждый день — шаг к вершине мастерства',
      image: 'https://cdn.poehali.dev/projects/3c738235-f3f5-4d0b-a3d4-974e185b7957/files/e15ab1ce-adea-47e4-a9d1-295b4096b4fb.jpg',
      bgColor: '#F9BC00',
    },
    {
      id: 3,
      title: 'ЕДИНАЯ КОМАНДА',
      subtitle: 'Вместе мы достигаем невозможного',
      image: 'https://cdn.poehali.dev/projects/3c738235-f3f5-4d0b-a3d4-974e185b7957/files/4919403f-40ed-4d5f-aab6-ae95af2ce892.jpg',
      bgColor: '#3D3D3D',
    },
    {
      id: 4,
      title: 'ПРОФЕССИОНАЛИЗМ',
      subtitle: 'Мастерство в каждом движении',
      image: 'https://cdn.poehali.dev/projects/3c738235-f3f5-4d0b-a3d4-974e185b7957/files/3a023189-d254-42dd-bd01-13186f0c7454.jpg',
      bgColor: '#0090D9',
    },
    {
      id: 5,
      title: 'ИДЕИ И РЕШЕНИЯ',
      subtitle: 'Инновации ведут нас вперёд',
      image: 'https://cdn.poehali.dev/projects/3c738235-f3f5-4d0b-a3d4-974e185b7957/files/0cf6234a-eef9-4df8-b8bd-bfc1c201b9a0.jpg',
      bgColor: '#F9BC00',
    },
    {
      id: 6,
      title: 'НАШЕ ДОСТИЖЕНИЕ',
      subtitle: 'Строим будущее Ямала вместе',
      image: 'https://cdn.poehali.dev/projects/3c738235-f3f5-4d0b-a3d4-974e185b7957/files/e53e9a69-4307-4098-bb08-c79cfc1056e4.jpg',
      bgColor: '#3D3D3D',
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
    link.download = `yamal-poster-${posterId}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#E8E8E8]">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <img 
            src="https://cdn.poehali.dev/files/21ac611e-bc1f-45a0-bf3b-d55cc00e1d73.jpg" 
            alt="Ямалсеверстройурал" 
            className="h-32 object-contain mx-auto mb-6"
          />
          <h1 className="text-5xl font-bold mb-4 text-[#3D3D3D]">
            Мотивационные постеры
          </h1>
          <p className="text-[#666] text-xl font-medium">
            Ямалсеверстройурал — команда профессионалов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posters.map((poster, index) => (
            <Card
              key={poster.id}
              className="overflow-hidden hover-scale group bg-white shadow-xl border-4 border-[#F9BC00]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                id={`poster-${poster.id}`}
                className="aspect-[1/1.4] relative flex flex-col"
                style={{ backgroundColor: poster.bgColor }}
              >
                <div className="absolute top-4 left-4 right-4 z-20">
                  <img 
                    src="https://cdn.poehali.dev/files/21ac611e-bc1f-45a0-bf3b-d55cc00e1d73.jpg" 
                    alt="Логотип" 
                    className="h-16 object-contain mx-auto drop-shadow-lg"
                  />
                </div>

                <div className="flex-1 relative overflow-hidden">
                  <img 
                    src={poster.image}
                    alt={poster.title}
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'contrast(1.1) saturate(1.2)',
                      mixBlendMode: 'multiply',
                    }}
                  />
                  <div 
                    className="absolute inset-0" 
                    style={{
                      background: `linear-gradient(to bottom, ${poster.bgColor}00 0%, ${poster.bgColor}dd 100%)`,
                    }}
                  ></div>
                </div>

                <div className="relative z-10 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="border-l-4 border-[#F9BC00] pl-4 mb-3">
                    <h2 className="text-3xl font-black text-white mb-2 leading-tight tracking-tight uppercase">
                      {poster.title}
                    </h2>
                  </div>
                  <p className="text-base text-white/90 font-medium">
                    {poster.subtitle}
                  </p>
                </div>

                <div 
                  className="absolute bottom-0 left-0 right-0 h-2"
                  style={{ backgroundColor: '#F9BC00' }}
                ></div>
              </div>

              <div className="p-4 bg-white border-t-2 border-[#F9BC00]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-[#3D3D3D]">Постер {poster.id}/6</p>
                    <p className="text-xs text-[#666]">A3/A4 формат • Комикс-стиль</p>
                  </div>
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(poster.id);
                    }}
                    className="gap-2 bg-[#0090D9] hover:bg-[#0090D9]/90 text-white font-bold"
                  >
                    <Icon name="Download" size={16} />
                    Скачать
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-white shadow-xl border-4 border-[#F9BC00]">
          <div className="flex items-start gap-6">
            <div className="bg-[#0090D9]/10 p-4 rounded-xl border-2 border-[#0090D9]">
              <Icon name="Info" size={32} className="text-[#0090D9]" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-[#3D3D3D]">О коллекции постеров</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="flex items-start gap-3">
                  <Icon name="Users" size={24} className="text-[#F9BC00] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#3D3D3D] mb-1 text-base">Для команды</p>
                    <p className="text-[#666]">Мотивационные постеры для сотрудников и коллег</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Palette" size={24} className="text-[#F9BC00] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#3D3D3D] mb-1 text-base">Комикс-стиль</p>
                    <p className="text-[#666]">Яркие иллюстрации в стиле графических романов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Hexagon" size={24} className="text-[#F9BC00] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#3D3D3D] mb-1 text-base">Фирменный стиль</p>
                    <p className="text-[#666]">Цвета и логотип Ямалсеверстройурал на каждом постере</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Frame" size={24} className="text-[#F9BC00] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#3D3D3D] mb-1 text-base">Готовы к печати</p>
                    <p className="text-[#666]">Форматы A3/A4 для размещения в офисе</p>
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
