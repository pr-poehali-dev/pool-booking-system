import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const timeSlots = [
    { time: '06:00', available: true },
    { time: '07:00', available: true },
    { time: '08:00', available: false },
    { time: '09:00', available: true },
    { time: '10:00', available: true },
    { time: '11:00', available: false },
    { time: '12:00', available: true },
    { time: '13:00', available: true },
    { time: '14:00', available: true },
    { time: '15:00', available: false },
    { time: '16:00', available: true },
    { time: '17:00', available: true },
    { time: '18:00', available: true },
    { time: '19:00', available: true },
    { time: '20:00', available: false },
    { time: '21:00', available: true },
  ];

  const services = [
    {
      title: 'Свободное плавание',
      description: 'Плавание в собственном темпе без ограничений',
      price: '500₽/час',
      icon: 'Waves'
    },
    {
      title: 'Аквааэробика',
      description: 'Групповые занятия в воде с инструктором',
      price: '800₽/занятие',
      icon: 'Users'
    },
    {
      title: 'Персональная тренировка',
      description: 'Индивидуальные занятия с тренером по плаванию',
      price: '2000₽/час',
      icon: 'User'
    },
    {
      title: 'Аква-терапия',
      description: 'Лечебные процедуры в воде под контролем специалиста',
      price: '1500₽/сеанс',
      icon: 'Heart'
    }
  ];

  const priceList = [
    { service: 'Разовое посещение', price: '500₽' },
    { service: 'Абонемент на 8 посещений', price: '3600₽' },
    { service: 'Месячный безлимит', price: '6500₽' },
    { service: 'Аренда дорожки (группа до 5 чел)', price: '2000₽/час' },
    { service: 'Детские занятия', price: '700₽/занятие' },
    { service: 'Сауна', price: '300₽/час' }
  ];

  const galleryImages = [
    {
      src: '/img/c34efeb6-6e0a-4099-936f-e58369d596ce.jpg',
      alt: 'Главный бассейн'
    },
    {
      src: '/img/d0c5a50c-3aa0-473b-978f-53aeb822e5e3.jpg',
      alt: 'Аквааэробика'
    },
    {
      src: '/img/25f68859-397f-4d6f-93aa-17bab2d13091.jpg',
      alt: 'Зона отдыха'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Waves" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">AquaZone</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#schedule" className="text-foreground hover:text-primary transition-colors">Расписание</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Современный
              <span className="text-primary"> Бассейн</span>
              <br />для вашего здоровья
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Профессиональные дорожки, чистая вода и комфортная атмосфера для плавания и фитнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать дорожку
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                <Icon name="Play" size={20} className="mr-2" />
                Виртуальный тур
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий спектр водных процедур для здоровья и отдыха
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                  <Button className="w-full">Записаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="schedule" className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Бронирование дорожки</h2>
            <p className="text-xl text-muted-foreground">
              Выберите удобное время для плавания
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="date">Выберите дату</Label>
                    <Input 
                      id="date" 
                      type="date" 
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Тип занятия</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.title.toLowerCase()}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="lane">Номер дорожки</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите дорожку" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Дорожка 1</SelectItem>
                        <SelectItem value="2">Дорожка 2</SelectItem>
                        <SelectItem value="3">Дорожка 3</SelectItem>
                        <SelectItem value="4">Дорожка 4</SelectItem>
                        <SelectItem value="5">Дорожка 5</SelectItem>
                        <SelectItem value="6">Дорожка 6</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label>Доступное время</Label>
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {timeSlots.map((slot, index) => (
                      <Button
                        key={index}
                        variant={selectedTime === slot.time ? "default" : "outline"}
                        size="sm"
                        disabled={!slot.available}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`${!slot.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {slot.time}
                      </Button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded mr-2"></div>
                      Доступно
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-muted rounded mr-2"></div>
                      Занято
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Забронировать
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Цены на услуги</h2>
            <p className="text-xl text-muted-foreground">
              Доступные тарифы для всех категорий посетителей
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <div className="space-y-4">
                {priceList.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                    <span className="text-lg">{item.service}</span>
                    <Badge variant="secondary" className="text-lg px-4 py-2 bg-primary/10 text-primary">
                      {item.price}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground">
              Посмотрите на наш современный бассейн
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Мы всегда рады вас видеть
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" size={24} className="mr-3 text-primary" />
                  Адрес и время работы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Icon name="MapPin" size={20} className="mr-3 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">г. Москва</p>
                    <p className="text-muted-foreground">ул. Спортивная, 15</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-3 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">Ежедневно: 6:00 - 23:00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-3 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-3 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">info@aquazone.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MessageSquare" size={24} className="mr-3 text-primary" />
                  Связаться с нами
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Input id="message" placeholder="Ваше сообщение" className="mt-2" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Waves" size={32} className="text-primary" />
                <span className="text-2xl font-bold text-primary">AquaZone</span>
              </div>
              <p className="text-slate-400">
                Современный бассейн для здорового образа жизни и активного отдыха.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-slate-400 hover:text-white transition-colors">Услуги</a>
                <a href="#prices" className="block text-slate-400 hover:text-white transition-colors">Цены</a>
                <a href="#gallery" className="block text-slate-400 hover:text-white transition-colors">Галерея</a>
                <a href="#contacts" className="block text-slate-400 hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-slate-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@aquazone.ru</p>
                <p>г. Москва, ул. Спортивная, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 AquaZone. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;