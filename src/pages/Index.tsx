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
  const [selectedLane, setSelectedLane] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    email: ''
  });

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

  const lanes = [
    { id: 1, name: 'Дорожка 1', type: 'Для начинающих', available: true },
    { id: 2, name: 'Дорожка 2', type: 'Для начинающих', available: true },
    { id: 3, name: 'Дорожка 3', type: 'Средний уровень', available: true },
    { id: 4, name: 'Дорожка 4', type: 'Средний уровень', available: false },
    { id: 5, name: 'Дорожка 5', type: 'Профессиональная', available: true },
    { id: 6, name: 'Дорожка 6', type: 'Профессиональная', available: true },
  ];

  const services = [
    {
      title: 'Свободное плавание',
      description: 'Плавание в собственном темпе без ограничений',
      price: '500₽/час',
      icon: 'Waves',
      duration: '60 мин'
    },
    {
      title: 'Аквааэробика',
      description: 'Групповые занятия в воде с инструктором',
      price: '800₽/занятие',
      icon: 'Users',
      duration: '45 мин'
    },
    {
      title: 'Персональная тренировка',
      description: 'Индивидуальные занятия с тренером по плаванию',
      price: '2000₽/час',
      icon: 'User',
      duration: '60 мин'
    },
    {
      title: 'Аква-терапия',
      description: 'Лечебные процедуры в воде под контролем специалиста',
      price: '1500₽/сеанс',
      icon: 'Heart',
      duration: '40 мин'
    }
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedLane || !selectedService || !bookingData.name || !bookingData.phone) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    alert(`Бронирование подтверждено!\n\nДата: ${selectedDate}\nВремя: ${selectedTime}\nДорожка: ${selectedLane}\nУслуга: ${selectedService}\nИмя: ${bookingData.name}\nТелефон: ${bookingData.phone}`);
  };

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
      src: '/img/46e95222-ba2f-47c4-846f-798030805bf4.jpg',
      alt: 'Профессиональные дорожки'
    },
    {
      src: '/img/432e0d86-9504-42bf-9036-65f7ae5ee686.jpg',
      alt: 'Групповые занятия'
    },
    {
      src: '/img/c617950a-0c54-4d19-b8c4-6735456d4c0c.jpg',
      alt: 'Зона релаксации'
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
              <a href="#booking" className="text-foreground hover:text-primary transition-colors">Бронирование</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
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
              Профессиональные дорожки, чистая вода и удобная система бронирования онлайн
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
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
                  <div className="text-2xl font-bold text-primary mb-2">{service.price}</div>
                  <div className="text-sm text-muted-foreground mb-4">Продолжительность: {service.duration}</div>
                  <Button 
                    className="w-full"
                    onClick={() => {
                      setSelectedService(service.title);
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Бронирование дорожки</h2>
            <p className="text-xl text-muted-foreground">
              Выберите удобное время и забронируйте дорожку онлайн
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Booking Form */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="date" className="text-base font-semibold">Выберите дату</Label>
                      <Input 
                        id="date" 
                        type="date" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="mt-2 h-12"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    
                    <div>
                      <Label className="text-base font-semibold">Тип занятия</Label>
                      <Select value={selectedService} onValueChange={setSelectedService}>
                        <SelectTrigger className="mt-2 h-12">
                          <SelectValue placeholder="Выберите услугу" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service.title}>
                              <div className="flex items-center">
                                <Icon name={service.icon} size={16} className="mr-2" />
                                {service.title} - {service.price}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <Label className="text-base font-semibold">Доступное время</Label>
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mt-3">
                      {timeSlots.map((slot, index) => (
                        <Button
                          key={index}
                          variant={selectedTime === slot.time ? "default" : "outline"}
                          size="sm"
                          disabled={!slot.available}
                          onClick={() => setSelectedTime(slot.time)}
                          className={`h-12 ${!slot.available ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                  </div>

                  {/* Lane Selection */}
                  <div>
                    <Label className="text-base font-semibold">Выберите дорожку</Label>
                    <div className="grid md:grid-cols-2 gap-3 mt-3">
                      {lanes.map((lane) => (
                        <Button
                          key={lane.id}
                          variant={selectedLane === lane.name ? "default" : "outline"}
                          disabled={!lane.available}
                          onClick={() => setSelectedLane(lane.name)}
                          className={`h-16 flex flex-col items-start p-4 ${!lane.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          <div className="font-semibold">{lane.name}</div>
                          <div className="text-xs opacity-70">{lane.type}</div>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Info & Summary */}
                <div className="space-y-6">
                  <Card className="p-6 bg-primary/5 border-primary/20">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-lg">Ваши данные</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      <div>
                        <Label htmlFor="name">Имя *</Label>
                        <Input 
                          id="name" 
                          placeholder="Ваше имя" 
                          value={bookingData.name}
                          onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input 
                          id="phone" 
                          placeholder="+7 (___) ___-__-__" 
                          value={bookingData.phone}
                          onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email"
                          placeholder="your@email.com" 
                          value={bookingData.email}
                          onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                          className="mt-2"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Booking Summary */}
                  {(selectedDate || selectedTime || selectedLane || selectedService) && (
                    <Card className="p-6 bg-accent/5 border-accent/20">
                      <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-lg">Детали бронирования</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 space-y-3">
                        {selectedDate && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Дата:</span>
                            <span className="font-semibold">{selectedDate}</span>
                          </div>
                        )}
                        {selectedTime && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Время:</span>
                            <span className="font-semibold">{selectedTime}</span>
                          </div>
                        )}
                        {selectedLane && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Дорожка:</span>
                            <span className="font-semibold">{selectedLane}</span>
                          </div>
                        )}
                        {selectedService && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Услуга:</span>
                            <span className="font-semibold">{selectedService}</span>
                          </div>
                        )}
                        {selectedService && (
                          <div className="flex justify-between border-t pt-3">
                            <span className="text-muted-foreground">Стоимость:</span>
                            <span className="font-bold text-primary">
                              {services.find(s => s.title === selectedService)?.price}
                            </span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 h-12 text-lg"
                    onClick={handleBooking}
                  >
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Подтвердить бронирование
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>



      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground">
              Посмотрите на наш современный бассейн и оборудование
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <img 
                src="/img/46e95222-ba2f-47c4-846f-798030805bf4.jpg" 
                alt="Профессиональные дорожки"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Профессиональные дорожки</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <img 
                src="/img/432e0d86-9504-42bf-9036-65f7ae5ee686.jpg" 
                alt="Групповые занятия"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Групповые занятия</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <img 
                src="/img/c617950a-0c54-4d19-b8c4-6735456d4c0c.jpg" 
                alt="Зона релаксации"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Зона релаксации</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Мы всегда рады ответить на ваши вопросы
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" size={24} className="mr-3 text-primary" />
                  Как нас найти
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Icon name="MapPin" size={20} className="mr-3 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">г. Москва</p>
                    <p className="text-muted-foreground">ул. Спортивная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-3 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Ежедневно: 6:00 - 23:00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-3 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">+7 (495) 123-45-67</p>
                    <p className="text-muted-foreground">Администратор</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-3 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">info@aquazone.ru</p>
                    <p className="text-muted-foreground">Общие вопросы</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MessageSquare" size={24} className="mr-3 text-primary" />
                  Есть вопросы?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Имя</Label>
                  <Input id="contact-name" placeholder="Ваше имя" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="contact-phone">Телефон</Label>
                  <Input id="contact-phone" placeholder="+7 (___) ___-__-__" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="contact-message">Сообщение</Label>
                  <Input id="contact-message" placeholder="Опишите ваш вопрос" className="mt-2" />
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
              <p className="text-slate-400 mb-4">
                Современный бассейн для здорового образа жизни и активного отдыха. 
                Удобное бронирование онлайн.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
              <div className="space-y-2">
                <a href="#booking" className="block text-slate-400 hover:text-white transition-colors">Бронирование</a>
                <a href="#services" className="block text-slate-400 hover:text-white transition-colors">Услуги</a>
                <a href="#gallery" className="block text-slate-400 hover:text-white transition-colors">Галерея</a>
                <a href="#contact" className="block text-slate-400 hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-slate-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@aquazone.ru</p>
                <p>г. Москва, ул. Спортивная, 15</p>
                <p>Ежедневно: 6:00 - 23:00</p>
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