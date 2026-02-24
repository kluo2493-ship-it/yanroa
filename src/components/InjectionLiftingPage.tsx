import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CTASection from './CTASection';
import Footer from './Footer';
import Navbar from './Navbar';

function InjectionLiftingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-white md:bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-light mb-6 leading-relaxed tracking-wide" style={{color: '#1F1F1F'}}>
            面部年轻化
          </h1>
          <p className="text-sm md:text-base font-light leading-relaxed mb-8 max-w-2xl mx-auto" style={{color: '#4B5563'}}>
            非手术方式，轻松实现年轻化效果
          </p>
          <button
            onClick={() => navigate('/booking')}
            className="px-8 py-3 text-sm md:text-base font-light tracking-wide transition-all duration-300 hover:opacity-80"
            style={{
              backgroundColor: '#1C2B3A',
              color: '#FFFFFF'
            }}
          >
            现在开始探索
          </button>
        </div>
      </section>

      <section className="py-24 px-12">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-light" style={{color: '#1F1F1F'}}>服务项目</h2>
              <ul className="space-y-4 text-base" style={{color: '#4B5563'}}>
                <li className="flex items-start gap-3">
                  <span className="mt-1">•</span>
                  <span>肉毒素注射 - 减少动态皱纹</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">•</span>
                  <span>玻尿酸填充 - 恢复面部饱满</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">•</span>
                  <span>面部提升 - 改善松弛下垂</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">•</span>
                  <span>水光针 - 提升肌肤水润度</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center">
              <span className="text-gray-400">项目展示图片</span>
            </div>
          </div>

          <div className="border-t pt-12" style={{borderColor: '#E5E7EB'}}>
            <h2 className="text-2xl font-light mb-8" style={{color: '#1F1F1F'}}>为什么选择我们</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6" style={{backgroundColor: '#F3F4F6'}}>
                <h3 className="text-lg font-normal mb-3" style={{color: '#1F1F1F'}}>无创安全</h3>
                <p className="text-sm" style={{color: '#6B7280'}}>无需手术，安全可靠</p>
              </div>
              <div className="p-6" style={{backgroundColor: '#F3F4F6'}}>
                <h3 className="text-lg font-normal mb-3" style={{color: '#1F1F1F'}}>即刻见效</h3>
                <p className="text-sm" style={{color: '#6B7280'}}>治疗后立即看到效果</p>
              </div>
              <div className="p-6" style={{backgroundColor: '#F3F4F6'}}>
                <h3 className="text-lg font-normal mb-3" style={{color: '#1F1F1F'}}>自然持久</h3>
                <p className="text-sm" style={{color: '#6B7280'}}>效果自然，持续时间长</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CTASection />

      <Footer />
    </div>
  );
}

export default InjectionLiftingPage;
