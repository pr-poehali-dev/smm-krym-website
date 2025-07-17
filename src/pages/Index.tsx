import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';

export default function Index() {

  const caseStudies = [
    {
      title: "Отель 'Крымская Ривьера'",
      description: "Увеличили заполняемость на 45% за сезон",
      metrics: "186% рост бронирований",
      platform: "Instagram + VK",
      image: "/img/86cf4254-d919-423a-921a-45b39221365f.jpg"
    },
    {
      title: "Частный гид Анна Петрова",
      description: "Построили личный бренд и клиентскую базу",
      metrics: "250 новых клиентов",
      platform: "Telegram + Instagram",
      image: "/img/4eeffdd2-2f64-4844-aa6e-584d34e11cd0.jpg"
    }
  ];

  const faqItems = [
    {
      question: "Как быстро будут видны результаты?",
      answer: "Первые результаты заметны через 2-3 недели регулярной работы. Значительный рост показателей - через 1-2 месяца в зависимости от сезонности."
    },
    {
      question: "Работаете ли вы с малым бизнесом?",
      answer: "Да, у нас есть специальные тарифы для малого бизнеса и индивидуальных предпринимателей. Минимальный бюджет - от 15 000 рублей."
    },
    {
      question: "Включена ли настройка таргетированной рекламы?",
      answer: "В тарифе 'Через Крымбукинг' настройка рекламы включена. В индивидуальном тарифе - обсуждается отдельно."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            SMM-продвижение в VK, Telegram, Instagram
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Комплексное продвижение турбизнеса и локальных проектов в Крыму. 
            Прозрачные тарифы, реальные кейсы, понятный план запуска.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            Получить предложение
          </Button>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Форматы работы</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Индивидуально</CardTitle>
                <CardDescription className="text-center text-lg">от 25 000 ₽/мес</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Персональный менеджер</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Индивидуальная стратегия</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Еженедельные отчеты</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="X" className="text-red-500" size={20} />
                  <span>Интеграция с Крымбукинг</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-600 relative overflow-hidden">
              <Badge className="absolute top-4 right-4 bg-blue-600">Рекомендуем</Badge>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Через Крымбукинг</CardTitle>
                <CardDescription className="text-center text-lg">от 15 000 ₽/мес</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Готовые шаблоны контента</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Автоматизация постинга</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Интеграция с системой бронирования</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-green-600" size={20} />
                  <span>Единая CRM система</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Наш подход</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">Комплексность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Работаем сразу на всех платформах: VK, Telegram, Instagram. 
                  Единая стратегия, адаптированная под каждую соцсеть.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BarChart3" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">Прозрачность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Подробные отчеты о проделанной работе, четкие KPI, 
                  открытый доступ к аналитике и результатам.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">Туристический фокус</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Глубокое понимание туристической сферы Крыма, 
                  работа с сезонностью и специфическими потребностями.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Кейсы</h2>
          <div className="relative">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {caseStudies.map((caseItem, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-none shadow-lg">
                      <CardHeader>
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                          <div>
                            <Badge className="mb-2 bg-blue-100 text-blue-700">{caseItem.platform}</Badge>
                            <CardTitle className="text-2xl mb-2">{caseItem.title}</CardTitle>
                            <CardDescription className="text-lg">{caseItem.description}</CardDescription>
                            <div className="mt-4 text-3xl font-bold text-blue-600">
                              {caseItem.metrics}
                            </div>
                          </div>
                          <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                            <img 
                              src={caseItem.image} 
                              alt={caseItem.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Тарифы</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Индивидуально</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">от 25 000 ₽</span>
                  <span className="text-gray-600">/месяц</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-gray-600">В стоимость входит:</div>
                <ul className="space-y-2 text-sm">
                  <li>• Создание контент-плана</li>
                  <li>• Ведение 2-3 соцсетей</li>
                  <li>• Дизайн постов</li>
                  <li>• Ответы на комментарии</li>
                  <li>• Аналитика и отчеты</li>
                </ul>
                <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-600 relative">
              <Badge className="absolute top-4 right-4 bg-blue-600">Популярный</Badge>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Через Крымбукинг</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-blue-600">от 15 000 ₽</span>
                  <span className="text-gray-600">/месяц</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-gray-600">В стоимость входит:</div>
                <ul className="space-y-2 text-sm">
                  <li>• Все из индивидуального тарифа</li>
                  <li>• Интеграция с системой бронирования</li>
                  <li>• Автоматизация постинга</li>
                  <li>• Готовые шаблоны контента</li>
                  <li>• Единая CRM система</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы к продвижению?</h2>
          <p className="text-xl mb-8 opacity-90">
            Начните привлекать больше клиентов уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Оставить заявку
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}