import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import {
  Bot,
  Briefcase,
  CheckCircle,
  Cloud,
  Code,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Rocket,
  Sparkles,
  ShieldCheck,
  Sun,
  Terminal,
  Workflow,
  X
} from 'lucide-react'
import './styles.css'

const imagePath = file => `${import.meta.env.BASE_URL}images/${file}`
const appVersion = __APP_VERSION__
const currentYear = new Date().getFullYear()
const siteUrl = 'https://marceloesnd.com/'
const socialImage = `${siteUrl}images/social-card.svg`

const profile = {
  name: 'Marcelo Esperândio Lúcio',
  title: 'Senior QA Engineer | SDET | Test Automation Engineer',
  location: 'Barueri - SP, Brasil',
  email: 'marcelo.esperandio@outlook.com',
  whatsapp: '5513991429394',
  linkedin: 'https://linkedin.com/in/marceloesperandio',
  github: 'https://github.com/marceloesperandio',
  photo: imagePath('marcelo-profile.jpg'),
  resume: {
    PT: `${import.meta.env.BASE_URL}curriculo-marcelo-esperandio.pdf`,
    EN: `${import.meta.env.BASE_URL}resume-marcelo-esperandio-en.pdf`
  }
}

const careerStart = new Date(2009, 6, 1)
const getCareerYears = () => {
  const today = new Date()
  let years = today.getFullYear() - careerStart.getFullYear()
  const anniversaryPending = today.getMonth() < careerStart.getMonth()
    || (today.getMonth() === careerStart.getMonth() && today.getDate() < careerStart.getDate())
  return anniversaryPending ? years - 1 : years
}

const seoContent = {
  PT: {
    title: 'Marcelo Esperândio Lúcio | Senior QA Engineer',
    description: 'Senior QA Engineer com foco em automação, APIs, CI/CD e qualidade aplicada a integrações e sistemas críticos.',
    ogTitle: 'Marcelo Esperândio Lúcio | Senior QA Engineer',
    ogDescription: 'Estratégias de qualidade, automação e prevenção de falhas para times que precisam de releases mais confiáveis.',
    locale: 'pt_BR'
  },
  EN: {
    title: 'Marcelo Esperândio Lúcio | Senior QA Engineer & SDET',
    description: 'Senior QA Engineer focused on automation, APIs, CI/CD, and quality strategies for critical systems and integrations.',
    ogTitle: 'Marcelo Esperândio Lúcio | Senior QA Engineer & SDET',
    ogDescription: 'Quality strategy, test automation, and defect prevention for teams that need more reliable releases.',
    locale: 'en_US'
  }
}

const updateMeta = (selector, attributes) => {
  const element = document.head.querySelector(selector)
  if (!element) return
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
}

const content = {
  PT: {
    themeMode: darkMode => `Modo ${darkMode ? 'noturno' : 'claro'}`,
    themeAria: 'Alternar tema',
    languageAria: 'Selecionar idioma',
    nav: ['Início', 'Sobre mim', 'Soluções', 'Tecnologias', 'Experiência', 'Cursos e certificações', 'Formação', 'Contato'],
    heroText: years => `Senior QA Engineer com ${years} anos de experiência fortalecendo releases, pipelines e integrações críticas com automação, estratégia de testes e prevenção de falhas.`,
    heroSupport: 'Atuo na interseção entre engenharia, produto e negócio para reduzir risco técnico, acelerar feedback e dar previsibilidade a times que entregam em escala.',
    heroHighlights: ['Integrações críticas, APIs e contratos entre serviços', 'Automação backend, frontend e mobile conectada ao CI/CD', 'Shift Left, observabilidade e estratégia de qualidade orientada por evidências'],
    trustTitle: 'Atuação em contextos como',
    trustItems: ['Telecom', 'Banking', 'Sistemas distribuídos', 'Times de produto em escala'],
    availability: 'Disponível para oportunidades em Quality Engineering, SDET e Test Automation com foco em impacto técnico e previsibilidade de entrega.',
    talkButton: 'Agendar conversa',
    casesButton: 'Ver estudos de caso',
    resumeButton: 'Baixar currículo',
    stats: ['Anos acelerando qualidade em software', 'Empresas enterprise no histórico', 'Tecnologias e ferramentas aplicadas', 'Setores críticos atendidos'],
    aboutTitle: 'COMO EU AGREGO',
    aboutText: 'Entro para organizar qualidade onde ela precisa influenciar resultado: clarificando riscos, estruturando automação útil, melhorando feedback no pipeline e conectando estratégia de testes ao contexto real do produto.',
    aboutList: ['Traduzo riscos técnicos em decisões mais claras para o time', 'Estruturo automação que acelera feedback sem virar custo morto', 'Elevo maturidade de QA com colaboração, priorização e evidência'],
    casesTitle: 'ESTUDOS DE CASO',
    casesSubtitle: 'Recortes de atuação com foco no que um recrutador ou gestor quer enxergar: problema, decisão técnica e impacto na entrega.',
    caseLabels: ['Desafio', 'O que eu fiz', 'Impacto na entrega'],
    cases: [
      { title: 'Qualidade ponta a ponta em sistemas Oracle e Salesforce', context: 'Na VTAL, atuei em sistemas críticos com dependências entre Oracle e Salesforce que exigiam validação integrada e resposta rápida a risco.', approach: 'Mantive automações backend e frontend, executei testes funcionais, integrados, exploratórios e de contrato e trabalhei junto de desenvolvimento e produto na mitigação de riscos.', result: 'A qualidade passou a acompanhar o fluxo ponta a ponta com cobertura mais consistente sobre integrações sensíveis e decisões de entrega mais seguras.', stack: ['Salesforce', 'Oracle', 'Contract Testing', 'Exploratory Testing'] },
      { title: 'Estratégia de automação e CI/CD para APIs e serviços', context: 'Na Sinqia, o desafio era estruturar testes automatizados e não funcionais em serviços distribuídos com necessidade de feedback mais previsível.', approach: 'Defini estratégias de testes, automatizei APIs, desenvolvi soluções internas com Spring Boot e conectei a execução a pipelines no Azure DevOps com apoio de indicadores no SonarQube.', result: 'O pipeline passou a refletir melhor a saúde técnica dos serviços, com feedback mais cedo no fluxo e maior previsibilidade para mudanças.', stack: ['Azure DevOps', 'Spring Boot', 'REST APIs', 'SonarQube'] },
      { title: 'QA leadership com cloud, pipelines e observabilidade', context: 'No Banco PAN, a evolução da automação precisava acompanhar iniciativas de cloud, Kubernetes e maior complexidade entre times.', approach: 'Avancei automação frontend e backend com Java, Selenium e RestAssured, construí pipelines com Jenkins e apoiei validações produtivas com AWS CloudWatch como QA Lead.', result: 'As práticas de qualidade ficaram mais alinhadas à operação real do ambiente, com melhor sustentação técnica para entregas contínuas e iniciativas de escala.', stack: ['Java', 'Jenkins', 'AWS CloudWatch', 'Kubernetes'] }
    ],
    technologiesTitle: 'TECNOLOGIAS',
    experienceTitle: 'EXPERIÊNCIA PROFISSIONAL',
    certificationsTitle: 'CURSOS',
    certificationsSubtitle: 'Formação complementar em qualidade, automação e agilidade. Certificados disponíveis mediante solicitação.',
    educationTitle: 'FORMAÇÃO ACADÊMICA',
    contactTitle: 'VAMOS CONVERSAR?',
    contactText: 'Se você precisa aumentar confiança em releases, melhorar automação ou estruturar qualidade para sistemas críticos, podemos conversar.',
    skipLink: 'Pular para o conteúdo',
    copyright: `© Veltrix ${currentYear}. Portfólio profissional de Marcelo Esperândio.`,
    skillsCategories: [
      { category: 'Linguagens & Automação', icon: Code2, items: ['Java', 'Python', 'JavaScript', 'Selenium', 'Playwright', 'Cypress', 'RestAssured', 'Appium'] },
      { category: 'Qualidade & APIs', icon: ShieldCheck, items: ['Contract Testing', 'BDD', 'Cucumber', 'APIs REST', 'Testes exploratórios', 'Testes não funcionais'] },
      { category: 'Cloud & Entrega', icon: Cloud, items: ['Azure DevOps', 'Jenkins', 'GitHub Actions', 'AWS', 'Kubernetes', 'CloudWatch', 'SonarQube', 'JMeter'] },
      {
        category: 'IA aplicada à Qualidade',
        icon: Bot,
        featured: true,
        tools: ['ChatGPT', 'Claude', 'Copilot', 'Gemini', 'Codex', 'GitHub Copilot'],
        items: [
          'Geração e revisão de cenários',
          'Análise de logs e falhas',
          'Apoio à automação e revisão de código',
          'Testes e avaliação de aplicações com IA'
        ]
      }
    ],
    experiences: [
      { company: 'VTAL', role: 'Quality Engineer', year: 'Ago/2025 - Mai/2026', location: 'São Paulo - SP', highlights: ['Ampliação da cobertura de qualidade em integrações Salesforce FSL e Oracle OSM/SOM, da validação funcional aos contratos entre serviços.', 'Automação backend incorporada ao fluxo de entrega para acelerar o feedback sobre regressões.', 'Riscos de integração antecipados por testes exploratórios, de APIs e colaboração contínua com desenvolvimento e produto.'] },
      { company: 'Sinqia', role: 'Software Development Engineer in Test (SDET)', year: 'Nov/2023 - Mai/2025', location: 'São Paulo - SP', highlights: ['Fortalecimento da estratégia de testes backend, cobrindo requisitos funcionais e não funcionais.', 'Execução automatizada integrada ao Azure Pipelines, com qualidade acompanhada pelo SonarQube.', 'Maior previsibilidade entre serviços distribuídos por meio de APIs REST, Spring Boot e testes de contrato.'] },
      { company: 'Banco PAN', role: 'Quality Engineer / Chapter QA', year: 'Out/2019 - Out/2023', location: 'São Paulo - SP', highlights: ['Evolução da automação frontend e backend com Java, Selenium, RestAssured, JUnit 5 e Cucumber.', 'Controles de qualidade incorporados à migração para Kubernetes e aos pipelines Jenkins, com análise no CloudWatch.', 'Padronização de práticas e estratégias ponta a ponta por meio da liderança técnica do Chapter QA.'] },
      { company: 'Grupo Abril', role: 'Analista de Testes Sênior, Pleno e Júnior', year: 'Jan/2013 - Out/2019', location: 'São Paulo - SP', highlights: ['Expansão da regressão automatizada com Java, Selenium WebDriver e JUnit.', 'Cenários BDD/Gherkin conectando requisitos, testes funcionais e validações não funcionais.', 'Maior segurança nas mudanças por meio de homologação com usuários e acompanhamento em produção.'] },
      { company: 'NET / Claro', role: 'Analista de Testes Júnior', year: 'Jul/2009 - Dez/2012', location: 'São Paulo - SP', highlights: ['Cobertura de fluxos críticos com testes funcionais, integrados e não funcionais.', 'Riscos em aplicações móveis e migrações de telecomunicações identificados antes da entrega.', 'Rastreabilidade de testes e defeitos com Oracle SQL Developer, SoapUI, TestLink e Bugzilla.'] }
    ],
    certifications: [
      { name: 'Gerenciamento de Testes: Plano de Testes e Gestão de Bugs', level: 'Test Management' },
      { name: 'BDD e Java: Behavior Driven Development com Cucumber', level: 'Cucumber / Java' },
      { name: 'Automação de Testes com Selenium WebDriver em Java', level: 'Test Automation' },
      { name: 'Gestão e Desenvolvimento de Projetos Agile na Visão do QA', level: 'Agile Testing' }
    ],
    education: [
      { title: 'Análise e Desenvolvimento de Sistemas', place: 'UNINOVE', period: 'Jul/2023 - Dez/2026', status: 'Em andamento' },
      { title: 'Sistemas e Redes de Computador', place: 'UNINOVE', period: 'Jul/2007 - Dez/2009', status: 'Concluído' }
    ]
  },
  EN: {
    themeMode: darkMode => `${darkMode ? 'Dark' : 'Light'} mode`,
    themeAria: 'Toggle theme',
    languageAria: 'Select language',
    nav: ['Home', 'About me', 'Solutions', 'Technologies', 'Experience', 'Courses & certifications', 'Education', 'Contact'],
    heroText: years => `Senior QA Engineer with ${years} years of experience strengthening releases, pipelines, and critical integrations through automation, test strategy, and defect prevention.`,
    heroSupport: 'I work across engineering, product, and business to reduce technical risk, speed up feedback, and give delivery teams more predictability at scale.',
    heroHighlights: ['Critical integrations, APIs, and service contracts', 'Backend, frontend, and mobile automation tied to CI/CD', 'Shift Left, observability, and evidence-based quality strategy'],
    trustTitle: 'Experienced across contexts such as',
    trustItems: ['Telecom', 'Banking', 'Distributed systems', 'Scaled product teams'],
    availability: 'Available for Quality Engineering, SDET, and Test Automation opportunities focused on technical impact and delivery predictability.',
    talkButton: 'Schedule a call',
    casesButton: 'View case studies',
    resumeButton: 'Download résumé',
    stats: ['Years accelerating software quality', 'Enterprise companies in experience', 'Technologies and tools applied', 'Critical sectors covered'],
    aboutTitle: 'HOW I ADD VALUE',
    aboutText: 'I focus quality where it changes outcomes: clarifying risk, building useful automation, improving pipeline feedback, and connecting test strategy to the real product context.',
    aboutList: ['I turn technical risk into clearer delivery decisions', 'I build automation that speeds feedback without becoming dead weight', 'I raise QA maturity with collaboration, prioritization, and evidence'],
    casesTitle: 'CASE STUDIES',
    casesSubtitle: 'Snapshots designed to show what recruiters and hiring managers usually look for: problem, technical action, and delivery impact.',
    caseLabels: ['Challenge', 'What I did', 'Delivery impact'],
    cases: [
      { title: 'End-to-end quality for Oracle and Salesforce systems', context: 'At VTAL, I worked on critical Oracle and Salesforce systems with cross-service dependencies that required integrated validation and rapid risk response.', approach: 'I maintained backend and frontend automation, executed functional, integration, exploratory, and contract testing, and worked closely with engineering and product to mitigate quality risks.', result: 'Quality followed the flow end to end, giving the team more consistent coverage over sensitive integrations and safer delivery decisions.', stack: ['Salesforce', 'Oracle', 'Contract Testing', 'Exploratory Testing'] },
      { title: 'Automation and CI/CD strategy for APIs and services', context: 'At Sinqia, the challenge was to structure automated and non-functional testing for distributed services that needed more predictable feedback.', approach: 'I defined testing strategies, automated APIs, built internal solutions with Spring Boot, and connected execution to Azure DevOps pipelines supported by SonarQube indicators.', result: 'The pipeline became a stronger reflection of service health, bringing feedback earlier into the flow and improving predictability for change.', stack: ['Azure DevOps', 'Spring Boot', 'REST APIs', 'SonarQube'] },
      { title: 'QA leadership across cloud, pipelines, and observability', context: 'At Banco PAN, automation maturity had to evolve alongside cloud initiatives, Kubernetes adoption, and growing cross-team complexity.', approach: 'I advanced frontend and backend automation with Java, Selenium, and RestAssured, built Jenkins pipelines, and supported production validation with AWS CloudWatch as a QA Lead.', result: 'Quality practices became more aligned with real operational signals, improving technical support for continuous delivery and scale initiatives.', stack: ['Java', 'Jenkins', 'AWS CloudWatch', 'Kubernetes'] }
    ],
    technologiesTitle: 'TECHNOLOGIES',
    experienceTitle: 'PROFESSIONAL EXPERIENCE',
    certificationsTitle: 'COURSES',
    certificationsSubtitle: 'Continuing education in quality, automation, and agile practices. Certificates available upon request.',
    educationTitle: 'EDUCATION',
    contactTitle: 'LET’S TALK?',
    contactText: 'If you need stronger release confidence, better automation, or a clearer quality strategy for critical systems, let’s talk.',
    skipLink: 'Skip to content',
    copyright: `© Veltrix ${currentYear}. Marcelo Esperândio’s professional portfolio.`,
    skillsCategories: [
      { category: 'Languages & Automation', icon: Code2, items: ['Java', 'Python', 'JavaScript', 'Selenium', 'Playwright', 'Cypress', 'RestAssured', 'Appium'] },
      { category: 'Quality & APIs', icon: ShieldCheck, items: ['Contract Testing', 'BDD', 'Cucumber', 'REST APIs', 'Exploratory Testing', 'Non-functional Testing'] },
      { category: 'Cloud & Delivery', icon: Cloud, items: ['Azure DevOps', 'Jenkins', 'GitHub Actions', 'AWS', 'Kubernetes', 'CloudWatch', 'SonarQube', 'JMeter'] },
      {
        category: 'AI applied to Quality Engineering',
        icon: Bot,
        featured: true,
        tools: ['ChatGPT', 'Claude', 'Copilot', 'Gemini', 'Codex', 'GitHub Copilot'],
        items: ['Test scenario generation and review', 'Log and failure analysis', 'Automation and code review support', 'AI application testing and evaluation']
      }
    ],
    experiences: [
      { company: 'VTAL', role: 'Quality Engineer', year: 'Aug/2025 - May/2026', location: 'São Paulo - SP', highlights: ['Expanded quality coverage across Salesforce FSL and Oracle OSM/SOM integrations, from functional validation to service contracts.', 'Embedded backend automation into the delivery flow to accelerate regression feedback.', 'Anticipated integration risks through exploratory and API testing in continuous collaboration with engineering and product.'] },
      { company: 'Sinqia', role: 'Software Development Engineer in Test (SDET)', year: 'Nov/2023 - May/2025', location: 'São Paulo - SP', highlights: ['Strengthened the backend testing strategy across functional and non-functional requirements.', 'Integrated automated execution into Azure Pipelines, with quality monitored through SonarQube.', 'Improved predictability across distributed services with REST APIs, Spring Boot, and contract testing.'] },
      { company: 'Banco PAN', role: 'Quality Engineer / QA Chapter Lead', year: 'Oct/2019 - Oct/2023', location: 'São Paulo - SP', highlights: ['Advanced frontend and backend automation with Java, Selenium, RestAssured, JUnit 5, and Cucumber.', 'Embedded quality controls into the Kubernetes migration and Jenkins pipelines, supported by CloudWatch analysis.', 'Standardized practices and end-to-end strategies through technical leadership of the QA Chapter.'] },
      { company: 'Grupo Abril', role: 'Senior, Mid-level, and Junior Test Analyst', year: 'Jan/2013 - Oct/2019', location: 'São Paulo - SP', highlights: ['Expanded automated regression coverage with Java, Selenium WebDriver, and JUnit.', 'Connected requirements, functional testing, and non-functional validation through BDD/Gherkin scenarios.', 'Increased confidence in changes through user acceptance testing and production monitoring.'] },
      { company: 'NET / Claro', role: 'Junior Test Analyst', year: 'Jul/2009 - Dec/2012', location: 'São Paulo - SP', highlights: ['Covered critical flows with functional, integration, and non-functional testing.', 'Identified risks in mobile applications and telecommunications migrations before release.', 'Improved test and defect traceability with Oracle SQL Developer, SoapUI, TestLink, and Bugzilla.'] }
    ],
    certifications: [
      { name: 'Test Management: Test Planning and Bug Management', level: 'Test Management' },
      { name: 'BDD and Java: Behavior Driven Development with Cucumber', level: 'Cucumber / Java' },
      { name: 'Test Automation with Selenium WebDriver in Java', level: 'Test Automation' },
      { name: 'Agile Project Management and Development from a QA Perspective', level: 'Agile Testing' }
    ],
    education: [
      { title: 'Systems Analysis and Development', place: 'UNINOVE', period: 'Jul/2023 - Dec/2026', status: 'In progress' },
      { title: 'Computer Systems and Networks', place: 'UNINOVE', period: 'Jul/2007 - Dec/2009', status: 'Completed' }
    ]
  }
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'PT')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileImageError, setProfileImageError] = useState(false)
  const menuButtonRef = useRef(null)
  const sidebarRef = useRef(null)
  const t = content[language]
  const careerYears = getCareerYears()

  useEffect(() => {
    const seo = seoContent[language]
    document.documentElement.lang = language === 'PT' ? 'pt-BR' : 'en-US'
    document.title = seo.title
    updateMeta('meta[name="description"]', { content: seo.description })
    updateMeta('meta[property="og:title"]', { content: seo.ogTitle })
    updateMeta('meta[property="og:description"]', { content: seo.ogDescription })
    updateMeta('meta[property="og:locale"]', { content: seo.locale })
    updateMeta('meta[property="og:url"]', { content: siteUrl })
    updateMeta('meta[property="og:image"]', { content: socialImage })
    updateMeta('meta[name="twitter:title"]', { content: seo.ogTitle })
    updateMeta('meta[name="twitter:description"]', { content: seo.ogDescription })
    updateMeta('meta[name="twitter:image"]', { content: socialImage })
    localStorage.setItem('portfolio-language', language)
  }, [language])

  useEffect(() => {
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  useEffect(() => {
    if (!mobileMenuOpen) return undefined
    const focusable = sidebarRef.current?.querySelectorAll('a, button')
    focusable?.[0]?.focus()
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
      if (event.key === 'Tab' && focusable?.length) {
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const navItems = [
    { label: t.nav[0], target: 'home' },
    { label: t.nav[1], target: 'sobre' },
    { label: t.nav[2], target: 'cases' },
    { label: t.nav[4], target: 'experiencia' },
    { label: t.nav[3], target: 'tecnologias' },
    { label: t.nav[6], target: 'formacao' },
    { label: t.nav[5], target: 'certificacoes' },
    { label: t.nav[7], target: 'contato' }
  ]

  return (
    <main className={darkMode ? 'theme-dark' : 'theme-light'}>
      <a className="skip-link" href="#main-content">{t.skipLink}</a>
      {mobileMenuOpen && (
        <button
          type="button"
          className="menu-backdrop"
          aria-label={language === 'PT' ? 'Fechar menu' : 'Close menu'}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <aside ref={sidebarRef} className={`sidebar${mobileMenuOpen ? ' open' : ''}`} aria-label={language === 'PT' ? 'Navegação principal' : 'Main navigation'}>
        <div className="logo">
          <img src={imagePath('veltrix-symbol.svg')} alt="Veltrix" />
        </div>
        <nav>
          {navItems.map(item => (
            <a key={item.target} href={`#${item.target}`} onClick={() => setMobileMenuOpen(false)}>{item.label}</a>
          ))}
        </nav>
      </aside>

      <section className="content" id="main-content" tabIndex="-1">
        <header className="topbar">
          <button
            ref={menuButtonRef}
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? (language === 'PT' ? 'Fechar menu' : 'Close menu') : (language === 'PT' ? 'Abrir menu' : 'Open menu')}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="topbar-right">
            <div className="language-toggle" role="group" aria-label={t.languageAria}>
              {['PT', 'EN'].map(code => (
                <button
                  key={code}
                  type="button"
                  className={language === code ? 'active' : ''}
                  aria-pressed={language === code}
                  onClick={() => setLanguage(code)}
                >
                  {code}
                </button>
              ))}
            </div>
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label={t.themeAria}>
              {darkMode ? <Moon size={18} /> : <Sun size={18} />}
              <span>{t.themeMode(darkMode)}</span>
            </button>
          </div>
        </header>

        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">{profile.title}</p>
            <h1>{profile.name}</h1>
            <p className="heroText">{t.heroText(careerYears)}</p>
            <p className="heroSupport">{t.heroSupport}</p>
            <div className="hero-highlights" aria-label={language === 'PT' ? 'Principais áreas de impacto' : 'Primary impact areas'}>
              {t.heroHighlights.map(item => (
                <div key={item} className="hero-highlight">
                  <CheckCircle size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="availability"><span aria-hidden="true"></span>{t.availability}</p>
            <div className="actions" aria-label={language === 'PT' ? 'Ações principais e perfis profissionais' : 'Primary actions and professional profiles'}>
              <a className="button primary-action main-cta" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
                <FaWhatsapp size={18}/> {t.talkButton}
              </a>
              <a className="button ghost primary-action" href="#cases">
                <Sparkles size={18}/> {t.casesButton}
              </a>
              <a
                className="button subtle-action"
                href={profile.resume[language]}
                download={language === 'PT' ? 'Curriculo-Marcelo-Esperandio.pdf' : 'Resume-Marcelo-Esperandio.pdf'}
              >
                <Download size={18}/> {t.resumeButton}
              </a>
              <a className="button ghost social-action" href={profile.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedinIn size={18}/> <span>LinkedIn</span>
              </a>
              <a className="button ghost social-action" href={profile.github} target="_blank" rel="noreferrer">
                <FaGithub size={18}/> <span>GitHub</span>
              </a>
            </div>
            <div className="trust-strip" aria-label={t.trustTitle}>
              <strong>{t.trustTitle}</strong>
              <div>
                {t.trustItems.map(item => <span key={item}>{item}</span>)}
              </div>
            </div>
          </div>
          <div className="hero-aside">
            <div className="profileCard">
              {profileImageError ? (
                <div className="profile-monogram" role="img" aria-label={profile.name}>
                  <span>ME</span>
                  <small>Quality Engineering</small>
                </div>
              ) : (
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="profile-photo"
                  onError={() => setProfileImageError(true)}
                />
              )}
            </div>
            <div className="recruiter-card">
              <p>{language === 'PT' ? 'Valor percebido rápido para recrutadores e gestores' : 'Fast recruiter and hiring-manager snapshot'}</p>
              <ul>
                <li>{language === 'PT' ? 'SDET e QA Engineer com prática em frontend, backend, APIs e mobile' : 'SDET and QA Engineer with hands-on frontend, backend, API, and mobile coverage'}</li>
                <li>{language === 'PT' ? 'Experiência em Azure DevOps, Jenkins, AWS, observabilidade e Shift Left' : 'Experience with Azure DevOps, Jenkins, AWS, observability, and Shift Left practices'}</li>
                <li>{language === 'PT' ? 'Atuação em telecom, financeiro, mídia e tecnologia' : 'Experience across telecom, finance, media, and technology contexts'}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="stats">
          <article>
            <div className="stat-icon"><Briefcase size={20}/></div>
            <div className="stat-copy"><strong>{careerYears}</strong><span>{t.stats[0]}</span></div>
          </article>
          <a className="stat-card stat-link" href="#experiencia" aria-label={`${t.stats[1]}: ${t.experienceTitle}`}>
            <div className="stat-icon"><Rocket size={20}/></div>
            <div className="stat-copy"><strong>5</strong><span>{t.stats[1]}</span></div>
          </a>
          <a className="stat-card stat-link" href="#tecnologias" aria-label={`${t.stats[2]}: ${t.technologiesTitle}`}>
            <div className="stat-icon"><Code size={20}/></div>
            <div className="stat-copy"><strong>20+</strong><span>{t.stats[2]}</span></div>
          </a>
          <article>
            <div className="stat-icon"><ShieldCheck size={20}/></div>
            <div className="stat-copy"><strong>4</strong><span>{t.stats[3]}</span></div>
          </article>
        </section>

        <section className="section about" id="sobre">
          <div className="about-copy">
            <h2>{t.aboutTitle}</h2>
            <div className="about-text">
              <p>{t.aboutText}</p>
            </div>
          </div>
          <div className="about-list">
            <div className="about-list-panel">
              <span><Workflow size={16}/> {t.aboutList[0]}</span>
              <span><Terminal size={16}/> {t.aboutList[1]}</span>
              <span><Cloud size={16}/> {t.aboutList[2]}</span>
            </div>
          </div>
        </section>

        <section className="section case-studies" id="cases">
          <div className="section-heading">
            <h2>{t.casesTitle}</h2>
            <p>{t.casesSubtitle}</p>
          </div>
          <div className="cases-grid">
            {t.cases.map((item, index) => (
              <article className="case-card" key={item.title}>
                <div className="case-number" aria-hidden="true">0{index + 1}</div>
                <h3>{item.title}</h3>
                <dl>
                  <div><dt>{t.caseLabels[0]}</dt><dd>{item.context}</dd></div>
                  <div><dt>{t.caseLabels[1]}</dt><dd>{item.approach}</dd></div>
                  <div><dt>{t.caseLabels[2]}</dt><dd>{item.result}</dd></div>
                </dl>
                <div className="case-stack">
                  {item.stack.map(technology => <span key={technology}>{technology}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experiencia">
          <h2>{t.experienceTitle}</h2>
          <div className="experiences">
            {t.experiences.map(experience => (
              <article className="experience" key={experience.company}>
                <div className="experience-head">
                  <div className="exp-title">
                    <span>{experience.company}</span> - {experience.role}
                  </div>
                  <div className="exp-meta">
                    <strong>{experience.year}</strong>
                    <span>{experience.location}</span>
                  </div>
                </div>
                <div className="experience-details">
                  <ul>
                    {experience.highlights.map(highlight => (
                      <li key={highlight}>
                        <CheckCircle size={15} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="tecnologias">
          <h2>{t.technologiesTitle}</h2>
          <div className="skills-grid">
            {t.skillsCategories.map(({ category, icon: Icon, items, featured, tools }) => (
              <article key={category} className={`skill-category${featured ? ' featured' : ''}${tools ? ' ai-quality' : ''}`}>
                <div className="skill-header">
                  <Icon size={20} />
                  <h3>{category}</h3>
                </div>
                <div className="skill-panel">
                  {tools ? (
                    <div className="ai-quality-content">
                      <div className="ai-tools">
                        {tools.map(tool => <span key={tool}>{tool}</span>)}
                      </div>
                      <div className="ai-use-cases">
                        {items.map(item => (
                          <div key={item}>
                            <CheckCircle size={16} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="skill-items">
                      {items.map(item => <span key={item}>{item}</span>)}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="formacao">
          <h2>{t.educationTitle}</h2>
          <div className="education-grid">
            {t.education.map(item => (
              <article className="education-card" key={item.title}>
                <div className="education-icon" aria-hidden="true">
                  <GraduationCap size={22} />
                </div>
                <div className="education-content">
                  <div className="education-heading">
                    <div>
                      <span>{item.place}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <strong>{item.status}</strong>
                  </div>
                  <p>{item.period}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid two" id="certificacoes">
          <article className="card">
            <h2>{t.certificationsTitle}</h2>
            <p className="section-intro">{t.certificationsSubtitle}</p>
            <div className="certs">
              {t.certifications.map(cert => (
                <div key={cert.name} className="cert-item">
                  <strong>{cert.name}</strong>
                  <span>{cert.level}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="card" id="contato">
            <h2>{t.contactTitle}</h2>
            <p className="contact-copy">{t.contactText}</p>
            <div className="contact-info">
              <a href={`mailto:${profile.email}`}><Mail size={16}/> {profile.email}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn size={16}/> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer"><FaGithub size={16}/> GitHub</a>
              <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer"><FaWhatsapp size={16}/> WhatsApp</a>
              <span className="location"><MapPin size={16}/> {profile.location}</span>
            </div>
          </article>
        </section>
        <footer>
            <p>{`v${appVersion} ${t.copyright}`}</p>
        </footer>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
