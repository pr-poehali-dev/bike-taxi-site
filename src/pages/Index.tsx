import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary flex items-center gap-2">
            <Icon name="Bike" size={32} />
            БАЙК-ТАКСИ
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#promo" className="text-foreground hover:text-primary transition-colors">Промо</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Заказать
          </Button>
        </div>
      </nav>

      <section id="hero" className="relative overflow-hidden pt-20">
        <div 
          className="w-full h-screen"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/e11fdb48-54cd-495f-947f-1c1b265cdddf/files/3f765207-add0-4fa5-b7b4-0985bfec9842.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      </section>

      <section className="relative bg-background py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground">
            ДРАЙВ<br />
            <span className="text-primary">БЕЗ ГРАНИЦ</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мотоциклетное такси — свобода передвижения по городу на максимальной скорости
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <Icon name="Zap" className="mr-2" size={24} />
              Заказать поездку
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-foreground">О НАС</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/e11fdb48-54cd-495f-947f-1c1b265cdddf/files/c8a19ce0-f2ae-453e-aa28-a382a35ec2ad.jpg"
                alt="Мотоцикл"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы — команда профессиональных мотоциклистов с многолетним опытом вождения. Наша миссия — сделать передвижение по городу быстрым, безопасным и захватывающим.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Байк-такси — это не просто транспорт. Это философия свободы, скорости и драйва. Мы знаем каждый переулок города и доставим вас в любую точку быстрее любого автомобиля.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Поездок в день</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Байкеров</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">99%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-foreground">УСЛУГИ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Zap" size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Экспресс-доставка</h3>
                <p className="text-muted-foreground">
                  Быстрая доставка пассажиров и грузов до 5 кг. Никаких пробок — только чистая скорость.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Users" size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Корпоративные поездки</h3>
                <p className="text-muted-foreground">
                  Доставка сотрудников и деловых документов. Быстро, безопасно, конфиденциально.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Clock" size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold">24/7 сервис</h3>
                <p className="text-muted-foreground">
                  Работаем круглосуточно. Нужно успеть на рейс в 4 утра? Мы уже в пути.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-foreground">ГАЛЕРЕЯ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/e11fdb48-54cd-495f-947f-1c1b265cdddf/files/36d0e6a5-2412-4b18-b05b-bb18361a34d0.jpg"
                alt="Байкер"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/e11fdb48-54cd-495f-947f-1c1b265cdddf/files/c8a19ce0-f2ae-453e-aa28-a382a35ec2ad.jpg"
                alt="Мотоцикл"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/e11fdb48-54cd-495f-947f-1c1b265cdddf/files/e76ba6fa-9203-4a07-b75a-334ec1c08c0b.jpg"
                alt="Доставка"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="promo" className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 text-foreground">СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</h2>
          <p className="text-2xl text-muted-foreground mb-8">
            Первая поездка со скидкой 30%
          </p>
          <div className="bg-card p-8 rounded-lg max-w-md mx-auto border border-primary">
            <div className="text-6xl font-bold text-primary mb-4">-30%</div>
            <p className="text-lg text-muted-foreground mb-6">
              Используйте промокод <span className="font-bold text-primary">SPEED30</span> при первом заказе
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 w-full">
              Активировать промокод
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-foreground">КОНТАКТЫ</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="p-8 bg-card">
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                  <span className="text-lg">info@bike-taxi.ru</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <span className="text-lg">Москва, ул. Тверская, 1</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card">
              <h3 className="text-2xl font-bold mb-6">Режим работы</h3>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Понедельник - Пятница</span>
                  <span className="font-bold">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Суббота - Воскресенье</span>
                  <span className="font-bold">24/7</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground">
                    Мы работаем круглосуточно без выходных для вашего удобства
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Bike" size={28} className="text-primary" />
            <span className="text-2xl font-bold">БАЙК-ТАКСИ</span>
          </div>
          <p className="text-muted-foreground">
            © 2026 Байк-Такси. Все права защищены. Драйв без границ.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;