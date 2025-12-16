
import Image from 'next/image';
import { NextPage } from 'next';

const FacebookAdsPage: NextPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto p-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-500">BITÁCORA DE EVOLUCIÓN</h1>
          <p className="text-xl mt-2">Adaptación sobre Opinión. Datos sobre Promesas.</p>
          <p className="mt-4 max-w-3xl mx-auto text-gray-400">
            &quot;El mercado digital no es estático; está en <strong>constante evolución</strong>. Lo que funcionaba hace seis meses, hoy es obsoleto. Nuestra metodología no se basa en &apos;trucos&apos;, sino en la lectura estricta de los <strong>datos actuales</strong>. Analizamos hacia dónde se mueve el algoritmo y adaptamos la infraestructura para mantener la rentabilidad. A continuación, <strong>la respuesta de nuestros sistemas ante la realidad del mercado</strong>:&quot;
          </p>
        </header>

        <div className="space-y-16">
          {/* CASO 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-500">CASO 1: TENDENCIA &quot;HIGH TICKET&quot;</h2>
              <p className="text-lg mt-2 text-gray-300">Sector Salud / Servicios</p>
              <div className="mt-4 text-gray-400 space-y-4">
                <p><strong>El Contexto Actual:</strong> &quot;Los datos actuales del sector salud muestran una saturación publicitaria sin precedentes. El paciente moderno ya no busca &apos;información&apos;, busca &apos;soluciones inmediatas&apos;. Las webs tradicionales han dejado de convertir.&quot;</p>
                <p><strong>La Adaptación (Conversion Engine):</strong> &quot;Para contrarrestar la subida de costos, la estrategia exige migrar de sitios informativos a <strong>Ecosistemas de Captura</strong>. Implementamos embudos de alta velocidad diseñados para la inmediatez que exige el usuario hoy.&quot;</p>
                <div>
                  <p><strong>El Resultado del Sistema:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li><strong>345 Citas Potenciales</strong> capturadas en flujo continuo.</li>
                    <li>Costo estabilizado en <strong>$171 MXN</strong>, validando que la fricción técnica era el problema real.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full h-auto">
              <Image src="/Sector-salud-anuncios-facebook-ads-xpertasocial-marketing Large.png" alt="Sector Salud" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* CASO 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-auto">
              <Image src="/retail-scaling-anuncios-facebook-ads-xpertasocial-marketing Large.png" alt="Retail Scaling" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-amber-500">CASO 2: TENDENCIA &quot;MASS VOLUME&quot;</h2>
              <p className="text-lg mt-2 text-gray-300">Sector Retail / Moda</p>
              <div className="mt-4 text-gray-400 space-y-4">
                <p><strong>El Contexto Actual:</strong> &quot;El E-commerce evoluciona hacia la hiper-personalización. Intentar vender con anuncios genéricos se ha vuelto financieramente insostenible debido a la fatiga de la audiencia.&quot;</p>
                <p><strong>La Adaptación (Scale Protocol):</strong> &quot;Las tendencias nos llevan a automatizar la oferta. Desplegamos <strong>Catálogos Dinámicos</strong> que permiten al algoritmo decidir qué producto mostrar a cada usuario, eliminando el error humano de la ecuación.&quot;</p>
                <div>
                  <p><strong>El Resultado del Sistema:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li><strong>+1,300 Transacciones</strong> procesadas automáticamente.</li>
                    <li>Un CPA de <strong>$34 MXN</strong> que se mantiene estable gracias a la rotación inteligente de inventario.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CASO 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-500">CASO 3: TENDENCIA &quot;BIG SPENDER&quot;</h2>
              <p className="text-lg mt-2 text-gray-300">Sector Inmobiliario / Desarrollo</p>
              <div className="mt-4 text-gray-400 space-y-4">
                <p><strong>El Contexto Actual:</strong> &quot;La inyección agresiva de capital en plataformas publicitarias suele romper la eficiencia. El mercado castiga a quien intenta escalar presupuesto sin una estructura de datos sólida.&quot;</p>
                <p><strong>La Adaptación (Market Leader):</strong> &quot;Para garantizar la estabilidad en altos volúmenes, desarrollamos una estructura de <strong>Segmentación Inversa</strong>. En lugar de buscar masividad, filtramos por capacidad de inversión desde el primer clic.&quot;</p>
                <div>
                  <p><strong>El Resultado del Sistema:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Gestión eficiente de <strong>$120,000+ MXN</strong> mensuales sin disparar el costo.</li>
                    <li><strong>1,080 Prospectos</strong> generados, demostrando que la estructura técnica soporta la escala.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full h-auto">
              <Image src="/real-state-anuncios-facebook-ads-xpertasocial-marketing Large.png" alt="Real State" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* CASO 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-auto">
              <Image src="/diversidad-creativa-anuncios-facebook-ads-xpertasocial-marketing Large.png" alt="Diversidad Creativa" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-amber-500">CASO 4: TENDENCIA &quot;CREATIVE AI&quot;</h2>
              <p className="text-lg mt-2 text-gray-300">Prueba de Eficiencia A/B</p>
              <div className="mt-4 text-gray-400 space-y-4">
                <p><strong>El Contexto Actual:</strong> &quot;La vida útil de un anuncio ha caído drásticamente. El usuario se aburre en horas. La producción manual de diseño ya no puede seguir el ritmo de consumo de contenido que exigen las redes.&quot;</p>
                <p><strong>La Adaptación (Andromeda):</strong> &quot;La solución lógica es la <strong>Generación Procedural</strong>. Enfrentamos el diseño tradicional contra variaciones de IA para medir la respuesta biológica del usuario (clic).&quot;</p>
                <div>
                  <p><strong>El Resultado del Sistema:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>El diseño tradicional generó costos de <strong>$116 MXN</strong> (Rechazo del mercado).</li>
                    <li>La variante adaptada logró <strong>$32 MXN</strong> (Aceptación del mercado).</li>
                    <li><strong>Conclusión:</strong> No se trata de &apos;buen gusto&apos;, se trata de velocidad de adaptación.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16">
          <p className="text-2xl text-gray-300">&quot;El algoritmo cambia. Tu infraestructura debería hacer lo mismo.&quot;</p>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">Operar con tecnología de ayer es la forma más rápida de perder presupuesto hoy. Permítenos alinear tu negocio con las métricas que realmente importan.</p>
          <button className="mt-8 bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-amber-600 transition-colors">
            ACTUALIZAR MI INFRAESTRUCTURA
          </button>
        </footer>

      </div>
    </div>
  );
};

export default FacebookAdsPage;
