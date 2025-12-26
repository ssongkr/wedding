import { motion } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { Section } from './components/layout/Section';
import { Button } from './components/ui/button';
import { Heart, MapPin, Calendar } from 'lucide-react';

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="min-h-screen flex flex-col items-center justify-center text-center bg-stone-100/50">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <Heart className="w-12 h-12 text-rose-400 mx-auto mb-4" />
          <h1 className="text-3xl font-serif text-stone-800 mb-2">김철수 & 이영희</h1>
          <p className="text-stone-500 font-light">저희 결혼합니다</p>
        </motion.div>
        
        <div className="flex flex-col gap-2 text-stone-600 mb-12">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>2025년 12월 25일 토요일 오후 1시</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>아모리스 웨딩홀 1층 그랜드볼룸</span>
          </div>
        </div>

        <Button size="lg" className="rounded-full px-8">
          청첩장 시작하기
        </Button>
      </Section>

      {/* Invitation Section */}
      <Section className="text-center">
        <h2 className="text-2xl font-serif mb-8 text-stone-800">초대의 글</h2>
        <p className="leading-loose text-stone-600 font-light">
          두 사람이 만나 하나의 매듭이 되고자 합니다.<br />
          저희 두 사람의 새로운 출발을<br />
          함께 축복해 주시면 감사하겠습니다.<br />
          <br />
          서로를 아끼고 배려하며<br />
          예쁘게 잘 살겠습니다.
        </p>
      </Section>

      {/* Gallery Placeholder */}
      <Section className="bg-stone-50">
        <h2 className="text-2xl font-serif mb-8 text-center text-stone-800">갤러리</h2>
        <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-stone-200 rounded-lg animate-pulse" />
          ))}
        </div>
      </Section>

      {/* Map Placeholder */}
      <Section>
        <h2 className="text-2xl font-serif mb-8 text-center text-stone-800">오시는 길</h2>
        <div className="w-full h-64 bg-stone-200 rounded-xl flex items-center justify-center text-stone-400">
          지도 영역 (Kakao Map)
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="outline">네이버 지도</Button>
          <Button variant="outline">카카오내비</Button>
        </div>
      </Section>

    </Layout>
  );
}

export default App;
