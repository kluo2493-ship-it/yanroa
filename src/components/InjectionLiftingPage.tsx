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
      <section className="py-16 md:py-20 px-6 md:px-12 bg-white">
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

          {/* Before/After Images */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 mt-12 max-w-4xl mx-auto bg-white">
            <div className="overflow-hidden bg-white">
              <img
                src="/3d931fc8d4b7d9ba6357f51f842da33d.jpg"
                alt="面部年轻化效果展示1"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden bg-white">
              <img
                src="/6492d5ffd9ae5616e415a8afbe984073.jpg"
                alt="面部年轻化效果展示2"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light mb-12 md:mb-16 text-center" style={{color: '#1F1F1F'}}>服务项目</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: '肉毒素注射',
                description: '精准减少动态皱纹，抚平额头纹、鱼尾纹、川字纹',
                features: ['即刻见效', '无恢复期', '效果自然']
              },
              {
                title: '玻尿酸填充',
                description: '恢复面部饱满度，填充凹陷，重塑年轻轮廓',
                features: ['立体塑形', '持久保湿', '安全可吸收']
              },
              {
                title: '面中三件套提升',
                description: '针对面中部位进行综合提升，改善苹果肌、泪沟、法令纹',
                features: ['三位一体', '全面年轻化', '效果显著']
              },
              {
                title: 'SMAS筋膜提升',
                description: '深层筋膜层提升，从根本改善面部松弛下垂',
                features: ['深层提升', '持久紧致', '专业技术']
              },
              {
                title: '单部位提升',
                description: '针对性改善局部问题，精准提升单一部位',
                features: ['精准定位', '个性化方案', '快速恢复']
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white border hover:shadow-xl transition-all duration-500 overflow-hidden"
                style={{borderColor: '#E5E7EB'}}
              >
                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                      style={{backgroundColor: '#F3F4F6'}}
                    >
                      <span className="text-xl md:text-2xl font-light" style={{color: '#1C2B3A'}}>
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-normal mb-3" style={{color: '#1F1F1F'}}>
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base font-light leading-relaxed mb-6" style={{color: '#6B7280'}}>
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t" style={{borderColor: '#F3F4F6'}}>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{backgroundColor: '#1C2B3A'}}
                        />
                        <span className="text-sm font-light" style={{color: '#4B5563'}}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t" style={{borderColor: '#E5E7EB'}}>
            <h2 className="text-2xl md:text-3xl font-light mb-8 md:mb-12 text-center" style={{color: '#1F1F1F'}}>为什么选择我们</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-6 md:p-8 bg-white border transition-all duration-300 hover:shadow-lg" style={{borderColor: '#E5E7EB'}}>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center" style={{backgroundColor: '#F3F4F6'}}>
                  <span className="text-2xl md:text-3xl">✓</span>
                </div>
                <h3 className="text-lg md:text-xl font-normal mb-3" style={{color: '#1F1F1F'}}>无创安全</h3>
                <p className="text-sm md:text-base font-light leading-relaxed" style={{color: '#6B7280'}}>
                  无需手术，采用国际认证产品，安全可靠，风险极低
                </p>
              </div>
              <div className="text-center p-6 md:p-8 bg-white border transition-all duration-300 hover:shadow-lg" style={{borderColor: '#E5E7EB'}}>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center" style={{backgroundColor: '#F3F4F6'}}>
                  <span className="text-2xl md:text-3xl">⚡</span>
                </div>
                <h3 className="text-lg md:text-xl font-normal mb-3" style={{color: '#1F1F1F'}}>即刻见效</h3>
                <p className="text-sm md:text-base font-light leading-relaxed" style={{color: '#6B7280'}}>
                  治疗后即可看到初步效果，无需漫长等待期
                </p>
              </div>
              <div className="text-center p-6 md:p-8 bg-white border transition-all duration-300 hover:shadow-lg" style={{borderColor: '#E5E7EB'}}>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center" style={{backgroundColor: '#F3F4F6'}}>
                  <span className="text-2xl md:text-3xl">★</span>
                </div>
                <h3 className="text-lg md:text-xl font-normal mb-3" style={{color: '#1F1F1F'}}>自然持久</h3>
                <p className="text-sm md:text-base font-light leading-relaxed" style={{color: '#6B7280'}}>
                  效果自然不僵硬，持续时间长，塑造真实美感
                </p>
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
