import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import {
  Activity,
  BookOpen,
  Bot,
  Briefcase,
  CheckCircle,
  Cloud,
  Code,
  Code2,
  Download,
  GraduationCap,
  House,
  Languages,
  Mail,
  MapPin,
  Menu,
  Moon,
  ShieldCheck,
  Sun,
  Terminal,
  Workflow,
  Wallet,
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
  title: 'Quality Engineer Specialist · Senior QA Engineer · SDET',
  location: 'Barueri - SP, Brasil',
  email: 'marcelo.esperandio@outlook.com',
  whatsapp: '5511921600112',
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
    languageAria: 'Selecionar idioma',
    nav: ['Início', 'Sobre mim', 'Estudos de caso', 'Tecnologias', 'Experiência', 'Cursos', 'Formação', 'Contato'],
    heroText: years => `Atuando há ${years} anos especificamente em qualidade de software. Automação e estratégia de testes para integrações críticas e entregas confiáveis.`,
    talkButton: 'Conversar pelo WhatsApp',
    resumeButton: 'Baixar currículo',
    stats: ['Anos acelerando qualidade em software', 'Grandes empresas na trajetória', 'Tecnologias e ferramentas aplicadas', 'Setores críticos atendidos'],
    aboutTitle: 'Como eu agrego',
    aboutText: 'Conecto engenharia, produto e negócio para priorizar riscos e definir o que precisa ser validado antes de cada entrega.',
    aboutList: ['Traduzo riscos técnicos em decisões mais claras para o time', 'Estruturo automação que agiliza o retorno dos testes e mantém seu valor ao longo do tempo', 'Elevo maturidade de QA com colaboração, priorização e evidência'],
    casesTitle: 'Estudos de caso',
    casesSubtitle: 'Desafios reais, decisões técnicas e resultados da minha atuação em qualidade de software.',
    caseLabels: ['Desafio', 'Decisão técnica', 'Entrega'],
    cases: [
      {
        title: 'Qualidade Ponta a Ponta | Oracle & Salesforce | VTAL',
        labels: ['Desafio', 'Estratégia e influência técnica', 'Resultados'],
        context: 'Garantir a qualidade dos fluxos críticos entre Oracle OSM, Salesforce Sales Cloud, MuleSoft e Salesforce Service Cloud, conciliando os testes de regressão com as entregas contínuas das sprints.',
        approach: 'Como Engenheiro de Qualidade Sênior, contribuí ativamente para o direcionamento da estratégia de testes, apoiando o time no mapeamento das integrações, na identificação de riscos e na priorização dos cenários críticos.',
        approachDetails: <>Em conjunto, adotamos uma abordagem baseada em riscos, combinando <strong>automação de testes backend e frontend, testes E2E, exploratórios e de contrato</strong>, buscando otimizar o esforço de validação e ampliar a confiabilidade das integrações.</>,
        result: 'Ampliação da cobertura dos fluxos críticos, otimização dos processos de regressão e maior eficiência na conciliação entre a validação dos sistemas existentes e as novas entregas das sprints.',
        stack: ['Oracle OSM', 'Salesforce Sales Cloud', 'MuleSoft', 'Salesforce Service Cloud']
      },
      {
        title: 'Estratégia de Automação de Testes para APIs e Serviços | Banco BTG Pactual',
        labels: ['Desafio', 'Estratégia e influência técnica', 'Resultados'],
        context: 'Estruturar uma estratégia de automação de testes para APIs e serviços distribuídos em um ambiente com baixa maturidade de automação. O principal objetivo era elevar a qualidade das entregas, reduzir o esforço manual e identificar oportunidades de otimização dos ciclos de teste.',
        approach: <>Contribuí ativamente para a evolução da estratégia de qualidade, identificando fluxos críticos e oportunidades de automação. Atuei no desenvolvimento de testes automatizados de APIs e na construção de soluções utilizando <strong>Java e Spring Boot</strong>, facilitando a geração e o gerenciamento de massas de teste, tornando as validações mais ágeis, consistentes e reutilizáveis.</>,
        approachDetails: 'A abordagem priorizou a automação dos cenários de maior risco e impacto para o negócio, buscando maior eficiência e confiabilidade nos processos de validação.',
        result: 'Implementação de testes automatizados de APIs no fluxo de entrega, otimização da preparação de massas de teste e centralização do acompanhamento dos indicadores de qualidade, contribuindo para maior visibilidade, agilidade e confiabilidade das entregas.',
        stack: ['Java', 'Spring Boot', 'APIs REST', 'Automação de testes']
      },
      {
        title: 'Liderança Técnica em QA | Automação, Cloud AWS, CI/CD e Qualidade de Software | Banco PAN',
        labels: ['Desafio', 'Estratégia e liderança técnica', 'Resultados'],
        context: <>Garantir a qualidade e a estabilidade dos processos críticos de concessão e manutenção de crédito durante a migração das aplicações para a <strong>AWS Cloud</strong>. O cenário envolvia um barramento de crédito com fluxos transacionais integrados, exigindo validações entre frontend e backend para assegurar a consistência das solicitações, avaliações e resultados das operações de crédito.</>,
        approach: <>Como <strong>QA Lead</strong>, atuei no direcionamento da estratégia de qualidade, apoiando o time na definição das abordagens de testes e na evolução da automação. Integramos testes automatizados utilizando <strong>Java, Selenium e RestAssured</strong> aos pipelines <strong>Jenkins</strong>, incorporando o <strong>SonarQube</strong> para apoiar a análise estática de código e o acompanhamento da qualidade técnica das entregas.</>,
        approachDetails: 'A estratégia contemplou testes funcionais e não funcionais, priorizando os fluxos críticos de negócio e a validação das integrações durante o processo de migração para a nuvem.',
        result: <>Ampliação da cobertura automatizada de frontend, backend e fluxos integrados, com execução de testes progressivos e de regressão em pipelines <strong>CI/CD</strong>. A atuação conjunta com os times de <strong>Arquitetura e DevOps</strong> contribuiu para maior visibilidade da qualidade, identificação antecipada de falhas e redução dos riscos associados à migração das aplicações para AWS.</>,
        stack: ['Java', 'Selenium', 'RestAssured', 'AWS', 'Jenkins', 'SonarQube', 'CI/CD']
      }
    ],
    projectsNav: 'Projetos pessoais',
    projectsTitle: 'Projetos pessoais',
    projectsSubtitle: 'Aplicações que desenvolvo além da atuação profissional.',
    featuredProjectTitle: 'Quality Vision',
    featuredProjectDescription: 'Indicadores de qualidade, cenários de testes e histórico de defeitos em uma visão consolidada por projeto.',
    featuredProjectAction: 'Ver projeto no GitHub',
    dashboardTitle: 'Veltrix Dashboard',
    dashboardDescription: 'Gestão de horas e faturamento por cliente e projeto, com fechamento mensal e relatórios em PDF.',
    dashboardAction: 'Ver projeto no GitHub',
    oikonomiaTitle: 'Oikonomia',
    oikonomiaDescription: 'Controle financeiro pessoal com resumo mensal, lançamentos recorrentes, parcelamento e importação de movimentações.',
    oikonomiaAction: 'Ver projeto no GitHub',
    technologiesTitle: 'Tecnologias',
    experienceTitle: 'Experiência profissional',
    certificationsTitle: 'Cursos',
    certificationsSubtitle: 'Formação complementar em qualidade, automação e agilidade. Certificados disponíveis mediante solicitação.',
    educationTitle: 'Formação acadêmica',
    contactTitle: 'Contato',
    contactText: 'Se você precisa aumentar a confiança nas entregas, melhorar a automação ou estruturar qualidade para sistemas críticos, podemos conversar.',
    skipLink: 'Pular para o conteúdo',
    copyright: `© Veltrix ${currentYear}. Portfólio profissional de Marcelo Esperândio Lucio.`,
    skillsCategories: [
      { category: 'Linguagens e automação', icon: Code2, items: ['Java', 'Python', 'JavaScript', 'Selenium', 'Playwright', 'Cypress', 'RestAssured', 'Appium'] },
      { category: 'Qualidade e APIs', icon: ShieldCheck, items: ['Testes de contrato', 'BDD', 'Cucumber', 'APIs REST', 'Testes exploratórios'] },
      { category: 'Testes não funcionais', icon: Activity, items: ['Testes de performance', 'Testes de carga', 'Testes de estresse', 'Apache JMeter', 'Grafana k6', 'Gatling'] },
      { category: 'Nuvem e entrega', icon: Cloud, items: ['Azure DevOps', 'Jenkins', 'GitHub Actions', 'AWS', 'Kubernetes', 'CloudWatch', 'SonarQube'] },
      {
        category: 'IA aplicada à qualidade',
        icon: Bot,
        featured: true,
        tools: ['ChatGPT', 'Claude', 'Gemini', 'Codex', 'GitHub Copilot'],
        items: [
          'Geração e revisão de cenários',
          'Análise de logs e falhas',
          'Apoio à automação e revisão de código',
          'Testes e avaliação de aplicações com IA',
          'Criação de agentes de IA com foco em testes'
        ]
      }
    ],
    experiences: [
      { company: 'V.tal', role: 'Quality Engineer', employment: 'Tempo integral', year: 'Ago/2025 - Mai/2026', highlights: ['Ampliação da cobertura de qualidade em integrações Salesforce FSL e Oracle OSM/SOM, da validação funcional aos contratos entre serviços.', 'Automação backend incorporada ao fluxo de entrega para acelerar o feedback sobre regressões.', 'Riscos de integração antecipados por testes exploratórios, de APIs e colaboração contínua com desenvolvimento e produto.'] },
      { company: 'Evertec', role: 'Software Development Engineer in Test (SDET)', employment: 'Tempo integral', location: 'São Paulo, Brasil · Remoto', year: 'Nov/2023 - Mai/2025', tools: ['RestAssured', 'AWS Web Services', 'BDD', 'Gherkin', 'Azure DevOps', 'Confluence', 'Jira', 'JMeter', 'Postman', 'Insomnia', 'SoapUI', 'Spring Boot', 'Mockito', 'JUnit', 'Teste unitário'], highlights: [
        'Desenvolvimento de automação de testes para backend.',
        'Execução de testes funcionais e não funcionais.',
        'Criação e manutenção de pipelines CI/CD utilizando Azure Pipelines.',
        'Criação de soluções para otimização de homologações, geração e validação de dados.',
        'Monitoramento da qualidade do código com SonarQube.',
        'Mapeamento de necessidades dos desenvolvedores e stakeholders.',
        'Identificação e análise de gaps de qualidade.',
        'Desenvolvimento de APIs com Spring Boot.',
        'Elaboração de documentação técnica e fluxos de processo.',
        'Implementação de melhorias em processos, técnicas e ferramentas da equipe e da operação, com foco no aprimoramento contínuo da qualidade.',
        'Experiência em metodologias ágeis, com foco em Kanban.'
      ] },
      { company: 'Banco PAN', role: 'Quality Engineer | Automação de Testes, Performance e CI/CD', year: 'Out/2019 - Out/2023', tools: ['Selenium', 'RestAssured', 'JUnit', 'BDD', 'Gherkin', 'Cucumber', 'Allure', 'Zephyr', 'AWS Web Services', 'Azure DevOps', 'Jenkins', 'Confluence', 'Jira', 'MySQL', 'Athena', 'DynamoDB'], highlights: [
        'Atuação desde o início do ciclo de desenvolvimento de software.',
        'Validação de implantações em ambientes de produção.',
        'Elaboração de estratégias de testes adequadas às diferentes necessidades das entregas.',
        'Execução de testes funcionais (ponta a ponta, testes de fumaça e testes de componentes) e não funcionais (performance).',
        'Automação de testes utilizando Java, Selenium WebDriver, RestAssured, JUnit 5 e Cucumber.',
        'Geração de massas de dados para testes com SQL, NoSQL e ETL (Athena).',
        'Colaboração na migração de aplicações de Elastic Beanstalk para Kubernetes.',
        'Análise de logs de defeitos utilizando CloudWatch e monitoramento de sistemas em produção.',
        'Liderança como QA e Chapter QA, colaborando com equipes de DevOps e desenvolvimento em ambientes ágeis (Kanban/Scrum).',
        'Construção de pipelines CI/CD com Jenkins e participação no processo de entrega contínua.',
        'Forte integração com stakeholders, incluindo áreas de negócios, Product Owners, Tech Leads e desenvolvedores.'
      ] },
      { company: 'Grupo Abril', role: 'Analista de testes sênior | pleno | júnior', employment: 'Tempo integral', location: 'São Paulo, Brasil', year: 'Jan/2013 - Out/2019', positions: [
        { role: 'Analista de testes sênior', period: 'Set/2016 - Out/2019', mode: 'Híbrido' },
        { role: 'Analista de testes pleno', period: 'Set/2014 - Set/2016', mode: 'Presencial', highlights: ['Automação de testes com Java, Selenium WebDriver e JUnit.', 'Execução de testes funcionais e não funcionais manuais.', 'Criação de scripts de teste com BDD/Gherkin e planejamento de cenários de testes.', 'Acompanhamento de homologação com o usuário final e monitoramento de mudanças em produção (GMUD).'], tools: ['Sikuli', 'MySQL'] },
        { role: 'Analista de testes júnior', period: 'Jan/2013 - Set/2014', mode: 'Presencial', highlights: ['Planejamento de testes e criação de cenários para execução manual de testes funcionais e não funcionais.', 'Reporte de defeitos e status de testes para as equipes técnicas e de negócios.'] }
      ], tools: ['Selenium', 'Salesforce', 'Mantis', 'TestLink', 'SQL Developer', 'SoapUI'], highlights: [
        'Automação de testes utilizando Java, Selenium WebDriver e JUnit.',
        'Execução de testes funcionais e não funcionais de forma manual.',
        'Criação de scripts de teste com BDD/Gherkin e planejamento de cenários de teste.',
        'Acompanhamento de homologações com o usuário final e monitoramento de mudanças em produção (GMUD).'
      ] },
      { company: 'NET / Claro', role: 'Analista de Testes Júnior', year: 'Jul/2009 - Dez/2012', highlights: ['Cobertura de fluxos críticos com testes funcionais, integrados e não funcionais.', 'Riscos em aplicações móveis e migrações de telecomunicações identificados antes da entrega.', 'Rastreabilidade de testes e defeitos com Oracle SQL Developer, SoapUI, TestLink e Bugzilla.'] }
    ],
    certifications: [
      { name: 'QA Practitioner' },
      { name: 'Automação de Testes com Selenium WebDriver' },
      { name: 'Automação de APIs com RestAssured' },
      { name: 'BDD com Cucumber' },
      { name: 'Gestão e Desenvolvimento Agile para QA' },
      { name: 'Liderar com Inteligência Emocional' },
      { name: 'Agila QA Planning' },
      { name: 'Testes funcionais com Selenium WebDriver: Do básico ao GRID' },
      { name: 'Dominando Postman em 10 passos' },
      { name: 'Testando API Rest com REST-assured' },
      { name: 'Aprenda BDD com Cucumber em JAVA' },
      { name: 'Gatling 3' },
      { name: 'Automação de Testes com Selenium WebDriver em Java' }
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Português', proficiency: 'Nativo' },
      { name: 'Inglês', proficiency: 'Leitura técnica e evolução contínua para comunicação profissional' }
    ],
    education: [
      { title: 'Análise e Desenvolvimento de Sistemas', place: 'UNINOVE', period: 'Jul/2023 - Dez/2026', status: 'Em andamento' },
      { title: 'Sistemas e Redes de Computador', place: 'UNINOVE', period: 'Jul/2007 - Dez/2009', status: 'Concluído' }
    ]
  },
  EN: {
    languageAria: 'Select language',
    nav: ['Home', 'About me', 'Case studies', 'Technologies', 'Experience', 'Courses', 'Education', 'Contact'],
    heroText: years => `${years} years dedicated to software quality. Test automation and strategy for critical integrations and reliable releases.`,
    talkButton: 'Chat on WhatsApp',
    resumeButton: 'Download resume',
    stats: ['Years in software quality', 'Enterprise companies worked with', 'Technologies and tools used', 'Critical industries served'],
    aboutTitle: 'How I add value',
    aboutText: 'I connect engineering, product, and business to prioritize risks and define what needs validation before each release.',
    aboutList: ['I turn technical risk into clearer delivery decisions', 'I build automation that delivers faster test feedback and remains valuable over time', 'I improve QA maturity through collaboration, prioritization, and evidence-based decisions'],
    casesTitle: 'Case studies',
    casesSubtitle: 'Real challenges, technical decisions, and outcomes from my work in software quality.',
    caseLabels: ['Challenge', 'Technical decision', 'Delivery'],
    cases: [
      {
        title: 'End-to-End Quality | Oracle & Salesforce | VTAL',
        labels: ['Challenge', 'Strategy and technical influence', 'Results'],
        context: 'Ensure the quality of critical workflows across Oracle OSM, Salesforce Sales Cloud, MuleSoft, and Salesforce Service Cloud, balancing regression testing with continuous delivery throughout each sprint.',
        approach: 'As a Senior Quality Engineer, I actively helped shape the test strategy, supporting the team in mapping integrations, identifying risks, and prioritizing critical scenarios.',
        approachDetails: <>Together, we adopted a risk-based approach, combining <strong>backend and frontend test automation with end-to-end, exploratory, and contract testing</strong> to optimize validation efforts and improve integration reliability.</>,
        result: 'Expanded coverage of critical workflows, streamlined regression testing, and improved efficiency in balancing validation of existing systems with new functionality delivered in each sprint.',
        stack: ['Oracle OSM', 'Salesforce Sales Cloud', 'MuleSoft', 'Salesforce Service Cloud']
      },
      {
        title: 'Test Automation Strategy for APIs and Services | Banco BTG Pactual',
        labels: ['Challenge', 'Strategy and technical influence', 'Results'],
        context: 'Establish a test automation strategy for APIs and distributed services in an environment with limited test automation maturity. The main goal was to improve delivery quality, reduce manual effort, and identify opportunities to optimize testing cycles.',
        approach: <>I actively contributed to the evolution of the quality strategy by identifying critical workflows and automation opportunities. I developed automated API tests and built solutions using <strong>Java and Spring Boot</strong> to simplify test data generation and management, making validation processes faster, more consistent, and easier to reuse.</>,
        approachDetails: 'The approach prioritized automation of scenarios with the greatest risk and business impact, aiming to improve efficiency and reliability in validation processes.',
        result: 'Implemented automated API tests in the delivery workflow, streamlined test data preparation, and centralized quality metrics tracking, improving visibility into quality and enabling faster, more reliable delivery.',
        stack: ['Java', 'Spring Boot', 'REST APIs', 'Test Automation']
      },
      {
        title: 'Technical QA Leadership | Automation, AWS Cloud, CI/CD, and Software Quality | Banco PAN',
        labels: ['Challenge', 'Strategy and technical leadership', 'Results'],
        context: <>Ensure the quality and stability of critical credit origination and servicing processes during the migration of applications to <strong>the AWS Cloud</strong>. The environment included a credit integration bus with interconnected transactional workflows, requiring frontend and backend validation to ensure consistency across credit applications, assessments, and transaction outcomes.</>,
        approach: <>As <strong>the QA Lead</strong>, I helped shape the quality strategy, supporting the team in defining testing approaches and expanding automation. We integrated automated tests using <strong>Java, Selenium, and RestAssured</strong> into <strong>Jenkins</strong> pipelines, incorporating <strong>SonarQube</strong> to support static code analysis and monitor the technical quality of releases.</>,
        approachDetails: 'The strategy covered functional and non-functional testing, prioritizing critical business workflows and integration validation throughout the cloud migration.',
        result: <>Expanded automated coverage of frontend, backend, and integrated workflows, with tests for new functionality and regression tests running in <strong>CI/CD</strong> pipelines. Collaboration with <strong>Architecture and DevOps</strong> teams improved quality visibility, enabled earlier defect detection, and reduced risks associated with migrating applications to AWS.</>,
        stack: ['Java', 'Selenium', 'RestAssured', 'AWS', 'Jenkins', 'SonarQube', 'CI/CD']
      }
    ],
    projectsNav: 'Personal projects',
    projectsTitle: 'Personal projects',
    projectsSubtitle: 'Applications I develop outside of my professional work.',
    featuredProjectTitle: 'Quality Vision',
    featuredProjectDescription: 'Quality metrics, test scenarios, and defect history in a unified view for each project.',
    featuredProjectAction: 'View project on GitHub',
    dashboardTitle: 'Veltrix Dashboard',
    dashboardDescription: 'Time tracking and billing by client and project, with monthly billing cycles and PDF reports.',
    dashboardAction: 'View project on GitHub',
    oikonomiaTitle: 'Oikonomia',
    oikonomiaDescription: 'Personal finance tracking with monthly summaries, recurring entries, installments, and transaction imports.',
    oikonomiaAction: 'View project on GitHub',
    technologiesTitle: 'Technologies',
    experienceTitle: 'Professional experience',
    certificationsTitle: 'Courses',
    certificationsSubtitle: 'Continuing education in quality, automation, and agile practices. Certificates available upon request.',
    educationTitle: 'Education',
    contactTitle: 'Contact',
    contactText: 'If you need stronger release confidence, better automation, or a clearer quality strategy for critical systems, let’s talk.',
    skipLink: 'Skip to content',
    copyright: `© Veltrix ${currentYear}. Marcelo Esperândio Lucio’s professional portfolio.`,
    skillsCategories: [
      { category: 'Languages & Automation', icon: Code2, items: ['Java', 'Python', 'JavaScript', 'Selenium', 'Playwright', 'Cypress', 'RestAssured', 'Appium'] },
      { category: 'Quality & APIs', icon: ShieldCheck, items: ['Contract Testing', 'BDD', 'Cucumber', 'REST APIs', 'Exploratory Testing'] },
      { category: 'Non-functional Testing', icon: Activity, items: ['Performance Testing', 'Load Testing', 'Stress Testing', 'Apache JMeter', 'Grafana k6', 'Gatling'] },
      { category: 'Cloud & Delivery', icon: Cloud, items: ['Azure DevOps', 'Jenkins', 'GitHub Actions', 'AWS', 'Kubernetes', 'CloudWatch', 'SonarQube'] },
      {
        category: 'AI for Quality Engineering',
        icon: Bot,
        featured: true,
        tools: ['ChatGPT', 'Claude', 'Gemini', 'Codex', 'GitHub Copilot'],
        items: ['Test scenario generation and review', 'Log and failure analysis', 'Automation and code review support', 'AI application testing and evaluation', 'AI agent creation focused on testing']
      }
    ],
    experiences: [
      { company: 'V.tal', role: 'Quality Engineer', employment: 'Full-time', year: 'Aug/2025 - May/2026', highlights: ['Expanded quality coverage across Salesforce FSL and Oracle OSM/SOM integrations, from functional validation to service contracts.', 'Embedded backend automation into the delivery flow to accelerate regression feedback.', 'Anticipated integration risks through exploratory and API testing in continuous collaboration with engineering and product.'] },
      { company: 'Evertec', role: 'Software Development Engineer in Test (SDET)', employment: 'Full-time', location: 'São Paulo, Brazil · Remote', year: 'Nov/2023 - May/2025', tools: ['RestAssured', 'AWS Web Services', 'BDD', 'Gherkin', 'Azure DevOps', 'Confluence', 'Jira', 'JMeter', 'Postman', 'Insomnia', 'SoapUI', 'Spring Boot', 'Mockito', 'JUnit', 'Unit testing'], highlights: [
        'Developed backend test automation.',
        'Executed functional and non-functional tests.',
        'Created and maintained CI/CD pipelines using Azure Pipelines.',
        'Created solutions to streamline acceptance testing, data generation, and data validation.',
        'Monitored code quality with SonarQube.',
        'Identified developer and stakeholder needs.',
        'Identified and analyzed quality gaps.',
        'Developed APIs with Spring Boot.',
        'Produced technical documentation and process flows.',
        'Improved team and operational processes, techniques, and tools, with a focus on continuous quality improvement.',
        'Worked with agile methodologies, focusing on Kanban.'
      ] },
      { company: 'Banco PAN', role: 'Quality Engineer | Test Automation, Performance and CI/CD', year: 'Oct/2019 - Oct/2023', tools: ['Selenium', 'RestAssured', 'JUnit', 'BDD', 'Gherkin', 'Cucumber', 'Allure', 'Zephyr', 'AWS Web Services', 'Azure DevOps', 'Jenkins', 'Confluence', 'Jira', 'MySQL', 'Athena', 'DynamoDB'], highlights: [
        'Contributed to quality assurance from the earliest stages of the software development lifecycle.',
        'Validated deployments in production environments.',
        'Designed test strategies tailored to different delivery requirements.',
        'Executed functional tests (end-to-end, smoke tests, and component tests) and non-functional tests (performance).',
        'Automated tests using Java, Selenium WebDriver, RestAssured, JUnit 5, and Cucumber.',
        'Generated test datasets using SQL, NoSQL, and ETL (Athena).',
        'Collaborated on migrating applications from Elastic Beanstalk to Kubernetes.',
        'Analyzed defect logs using CloudWatch and monitored production systems.',
        'Provided QA and QA Chapter leadership, collaborating with DevOps and development teams in agile environments (Kanban/Scrum).',
        'Built CI/CD pipelines with Jenkins and participated in continuous delivery.',
        'Worked closely with stakeholders, including business teams, Product Owners, Tech Leads, and developers.'
      ] },
      { company: 'Grupo Abril', role: 'Senior | Mid-level | Junior Test Analyst', employment: 'Full-time', location: 'São Paulo, Brazil', year: 'Jan/2013 - Oct/2019', positions: [
        { role: 'Senior Test Analyst', period: 'Sep/2016 - Oct/2019', mode: 'Hybrid' },
        { role: 'Mid-level Test Analyst', period: 'Sep/2014 - Sep/2016', mode: 'On-site', highlights: ['Automated tests using Java, Selenium WebDriver, and JUnit.', 'Executed manual functional and non-functional tests.', 'Created test scripts using BDD/Gherkin and planned test scenarios.', 'Supported user acceptance testing and monitored production changes through the change management process (GMUD).'], tools: ['Sikuli', 'MySQL'] },
        { role: 'Junior Test Analyst', period: 'Jan/2013 - Sep/2014', mode: 'On-site', highlights: ['Planned tests and created scenarios for manual functional and non-functional testing.', 'Reported defects and test status to technical and business teams.'] }
      ], tools: ['Selenium', 'Salesforce', 'Mantis', 'TestLink', 'SQL Developer', 'SoapUI'], highlights: [
        'Automated tests using Java, Selenium WebDriver, and JUnit.',
        'Executed manual functional and non-functional tests.',
        'Created test scripts using BDD/Gherkin and planned test scenarios.',
        'Supported user acceptance testing and monitored production changes through the change management process (GMUD).'
      ] },
      { company: 'NET / Claro', role: 'Junior Test Analyst', year: 'Jul/2009 - Dec/2012', highlights: ['Covered critical flows with functional, integration, and non-functional testing.', 'Identified risks in mobile applications and telecommunications migrations before release.', 'Improved test and defect traceability with Oracle SQL Developer, SoapUI, TestLink, and Bugzilla.'] }
    ],
    certifications: [
      { name: 'QA Practitioner' },
      { name: 'Test Automation with Selenium WebDriver' },
      { name: 'API Test Automation with RestAssured' },
      { name: 'BDD with Cucumber' },
      { name: 'Agile Management and Development for QA' },
      { name: 'Leading with Emotional Intelligence' },
      { name: 'Agila QA Planning' },
      { name: 'Functional Testing with Selenium WebDriver: From the Basics to Selenium Grid' },
      { name: 'Mastering Postman in 10 Steps' },
      { name: 'Testing REST APIs with REST Assured' },
      { name: 'Learn BDD with Cucumber in Java' },
      { name: 'Gatling 3' },
      { name: 'Test Automation with Selenium WebDriver in Java' }
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Portuguese', proficiency: 'Native' },
      { name: 'English', proficiency: 'Able to read technical documentation; continuously developing professional communication skills' }
    ],
    education: [
      { title: 'Systems Analysis and Development', place: 'UNINOVE', period: 'Jul/2023 - Dec/2026', status: 'In progress' },
      { title: 'Computer Systems and Networks', place: 'UNINOVE', period: 'Jul/2007 - Dec/2009', status: 'Completed' }
    ]
  }
}

function ActionLink({ variant = 'secondary', className = '', children, ...props }) {
  return <a className={`button button--${variant} font-semibold tracking-tight ${className}`} {...props}>{children}</a>
}

function TagList({ items, className }) {
  return <ul className={className}>{items.map(item => <li key={item}>{item}</li>)}</ul>
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('portfolio-language')
    if (saved === 'PT' || saved === 'EN') return saved
    return (navigator.languages?.[0] || navigator.language).toLowerCase().startsWith('pt') ? 'PT' : 'EN'
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 980px)').matches)
  const [activeSection, setActiveSection] = useState('home')
  const [profileImageError, setProfileImageError] = useState(false)
  const menuButtonRef = useRef(null)
  const sidebarRef = useRef(null)
  const closeMenu = () => {
    setMobileMenuOpen(false)
    requestAnimationFrame(() => menuButtonRef.current?.focus())
  }
  const navigateTo = (event, target) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0) return
    event.preventDefault()
    setMobileMenuOpen(false)
    window.history.pushState(null, '', `#${target}`)
    requestAnimationFrame(() => {
      const section = document.getElementById(target)
      const heading = section?.querySelector('h1, h2')
      heading?.focus({ preventScroll: true })
      section?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    })
  }
  const t = content[language]
  const careerYears = getCareerYears()

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
    const cards = [...document.querySelectorAll('.card, .case-card, .skill-category, .experience, .education-card, .stat-card, .profileCard, .sidebar nav, .logo')]
    const bindings = cards.map(card => {
      let frame = 0
      let bounds
      const reset = () => {
        cancelAnimationFrame(frame)
        bounds = undefined
        card.classList.remove('is-tilting')
        for (const property of ['--tilt-x', '--tilt-y', '--glare-x', '--glare-y']) card.style.removeProperty(property)
      }
      const enter = () => { bounds = card.getBoundingClientRect() }
      const move = event => {
        if (!media.matches || event.pointerType !== 'mouse') return
        bounds ||= card.getBoundingClientRect()
        const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width))
        const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height))
        cancelAnimationFrame(frame)
        frame = requestAnimationFrame(() => {
          card.style.setProperty('--tilt-x', `${(0.5 - y) * 8}deg`)
          card.style.setProperty('--tilt-y', `${(x - 0.5) * 8}deg`)
          card.style.setProperty('--glare-x', `${x * 100}%`)
          card.style.setProperty('--glare-y', `${y * 100}%`)
          card.classList.add('is-tilting')
        })
      }
      card.classList.add('tilt-card')
      card.addEventListener('pointerenter', enter)
      card.addEventListener('pointermove', move)
      card.addEventListener('pointerleave', reset)
      card.addEventListener('pointercancel', reset)
      return { card, enter, move, reset }
    })
    const resetAll = () => bindings.forEach(binding => binding.reset())
    media.addEventListener('change', resetAll)
    window.addEventListener('scroll', resetAll, { passive: true })
    window.addEventListener('resize', resetAll)
    return () => {
      media.removeEventListener('change', resetAll)
      window.removeEventListener('scroll', resetAll)
      window.removeEventListener('resize', resetAll)
      bindings.forEach(({ card, enter, move, reset }) => {
        reset()
        card.classList.remove('tilt-card')
        card.removeEventListener('pointerenter', enter)
        card.removeEventListener('pointermove', move)
        card.removeEventListener('pointerleave', reset)
        card.removeEventListener('pointercancel', reset)
      })
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 980px)')
    const update = () => {
      setIsMobile(media.matches)
      if (!media.matches) setMobileMenuOpen(false)
    }
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const sections = [...document.querySelectorAll('.main-content section[id], .main-content article[id]')]
    const update = () => {
      const scrollRoot = document.scrollingElement || document.documentElement
      const atPageEnd = scrollRoot.scrollHeight > window.innerHeight &&
        window.scrollY + window.innerHeight >= scrollRoot.scrollHeight - 2
      const current = atPageEnd
        ? sections.at(-1)
        : sections.filter(section => section.getBoundingClientRect().top <= 160).at(-1)
      const section = current?.id || 'home'
      const group = { sobre: 'home' }
      setActiveSection(group[section] || section)
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

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
    if (!mobileMenuOpen || !isMobile) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusable = sidebarRef.current?.querySelectorAll('a, button')
    focusable?.[0]?.focus()
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
        requestAnimationFrame(() => menuButtonRef.current?.focus())
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
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen, isMobile])

  const navItems = [
    { label: language === 'PT' ? 'Apresentação' : 'Overview', target: 'home', icon: House },
    { label: t.nav[2], target: 'cases', icon: ShieldCheck },
    { label: language === 'PT' ? 'Trajetória' : 'Background', target: 'experiencia', icon: Briefcase },
    { label: t.nav[7], target: 'contato', icon: Mail }
  ]

  return (
    <div className={`portfolio ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <a className="skip-link" href="#main-content">{t.skipLink}</a>
      {mobileMenuOpen && (
        <button
          type="button"
          className="menu-backdrop"
          aria-label={language === 'PT' ? 'Fechar menu' : 'Close menu'}
          onClick={closeMenu}
        />
      )}
      <aside id="main-navigation" inert={isMobile && !mobileMenuOpen} ref={sidebarRef} className={`sidebar${mobileMenuOpen ? ' open' : ''}`} aria-label={language === 'PT' ? 'Navegação principal' : 'Main navigation'}>
        <button type="button" className="menu-close" onClick={closeMenu} aria-label={language === 'PT' ? 'Fechar menu' : 'Close menu'}><X size={20} /></button>
        <div className="logo">
          <img src={imagePath('mel-logo.png')} alt="MEL" />
        </div>
        <nav aria-label={language === 'PT' ? 'Seções do portfólio' : 'Portfolio sections'}>
          {navItems.map(item => (
            <React.Fragment key={item.target}><a aria-current={activeSection === item.target ? 'location' : undefined} key={item.target} href={`#${item.target}`} onClick={event => navigateTo(event, item.target)}><item.icon size={18} aria-hidden="true" /><span>{item.label}</span></a>
            {item.target === 'experiencia' && <div className="nav-subsections">
              {[{ target: 'tecnologias', label: t.nav[3], icon: Code }, { target: 'projetos', label: t.projectsNav, icon: Code2 }, { target: 'formacao', label: t.nav[6], icon: GraduationCap }, { target: 'certificacoes', label: t.nav[5], icon: BookOpen }, { target: 'idiomas', label: t.languagesTitle, icon: Languages }].map(sub => <a key={sub.target} href={`#${sub.target}`} aria-current={activeSection === sub.target ? 'location' : undefined} onClick={event => navigateTo(event, sub.target)}><sub.icon size={18} aria-hidden="true" /><span>{sub.label}</span></a>)}
            </div>}</React.Fragment>
          ))}
        </nav>
      </aside>

      <section inert={isMobile && mobileMenuOpen} className="content">
        <header className="topbar">
          <button
            ref={menuButtonRef}
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? (language === 'PT' ? 'Fechar menu' : 'Close menu') : (language === 'PT' ? 'Abrir menu' : 'Open menu')}
            aria-controls="main-navigation"
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
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-pressed={darkMode} aria-label={language === 'PT' ? 'Tema escuro' : 'Dark theme'}>
              {darkMode ? <Moon size={18} /> : <Sun size={18} />}
              <span>{language === 'PT' ? 'Tema escuro' : 'Dark theme'}</span>
            </button>
          </div>
        </header>

        <main className="main-content" id="main-content" tabIndex="-1">
        <section className="hero" id="home" aria-labelledby="home-title">
          <div className="hero-copy min-w-0">
            <p className="eyebrow">{profile.title}</p>
            <div className="hero-bubble">
              <h1 id="home-title" tabIndex="-1">{profile.name}</h1>
            </div>
            <p className="heroText text-pretty">{t.heroText(careerYears)}</p>
            <p className="availability"><span aria-hidden="true"></span>{language === 'PT' ? 'Disponível para oportunidades em Quality Engineering e SDET.' : 'Available for quality engineering and SDET roles.'}</p>
            <div className="actions" aria-label={language === 'PT' ? 'Ações principais e perfis profissionais' : 'Primary actions and professional profiles'}>
              <ActionLink variant="primary" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
                <FaWhatsapp size={18}/> {t.talkButton}
              </ActionLink>
              <ActionLink
                variant="secondary"
                href={profile.resume[language]}
                download={language === 'PT' ? 'Curriculo-Marcelo-Esperandio.pdf' : 'Resume-Marcelo-Esperandio.pdf'}
              >
                <Download size={18}/> {t.resumeButton}
              </ActionLink>
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

          </div>
        </section>

        <section className="stats">
          <a className="stat-card" href="#projetos" onClick={event => navigateTo(event, 'projetos')}><div className="stat-icon"><Code2 size={20}/></div><div className="stat-copy"><strong>3</strong><span>{t.projectsNav}<small>{language === 'PT' ? 'Explorar projetos →' : 'Explore projects →'}</small></span></div></a>
          <a className="stat-card stat-link" href="#experiencia" onClick={event => navigateTo(event, 'experiencia')}>
            <div className="stat-icon"><Briefcase size={20}/></div>
            <div className="stat-copy"><strong>{t.experiences.length}</strong><span>{t.stats[1]}<small>{language === 'PT' ? 'Ver experiência →' : 'View experience →'}</small></span></div>
          </a>
          <a className="stat-card stat-link" href="#tecnologias" onClick={event => navigateTo(event, 'tecnologias')}>
            <div className="stat-icon"><Code size={20}/></div>
            <div className="stat-copy"><strong>20+</strong><span>{t.stats[2]}<small>{language === 'PT' ? 'Ver tecnologias →' : 'View technologies →'}</small></span></div>
          </a>

        </section>

        <section className="section" id="sobre" aria-labelledby="sobre-title">
          <div className="card about">
          <div className="about-copy">
            <h2 id="sobre-title" tabIndex="-1">{t.aboutTitle}</h2>
            <div className="about-text">
              <p>{t.aboutText}</p>
            </div>
          </div>
          <div className="about-list">
            <ul className="about-list-panel">
              <li><Workflow size={16} aria-hidden="true"/> {t.aboutList[0]}</li>
              <li><Terminal size={16} aria-hidden="true"/> {t.aboutList[1]}</li>
              <li><Cloud size={16} aria-hidden="true"/> {t.aboutList[2]}</li>
            </ul>
          </div>
          </div>
        </section>

        <section className="section case-studies" id="cases" aria-labelledby="cases-title">
          <div className="card section-card">
            <div className="section-heading text-pretty">
              <h2 id="cases-title" tabIndex="-1">{t.casesTitle}</h2>
              <p>{t.casesSubtitle}</p>
            </div>
            <div className="cases-grid">
              {t.cases.map((item, index) => (
                <article className="case-card" key={item.title}>
                  <div className="case-number" aria-hidden="true">0{index + 1}</div>
                  <h3>{item.title}</h3>
                  <dl>
                    <div><dt>{(item.labels || t.caseLabels)[0]}</dt><dd>{item.context}</dd></div>
                    <div><dt>{(item.labels || t.caseLabels)[1]}</dt><dd>{item.approach}{item.approachDetails && <p className="case-approach-details">{item.approachDetails}</p>}</dd></div>
                    <div><dt>{(item.labels || t.caseLabels)[2]}</dt><dd>{item.result}</dd></div>
                  </dl>
                  <TagList className="case-stack" items={item.stack} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experiencia" aria-labelledby="experiencia-title">
          <div className="card section-card">
            <div className="section-bubble">
              <h2 id="experiencia-title" tabIndex="-1">{t.experienceTitle}</h2>
            </div>
            <div className="experiences">
              {t.experiences.map(experience => (
                <article className="experience" key={experience.company}>
                  <div className="experience-head">
                    <h3 className="exp-title">
                      <span>{experience.company}</span>
                      <span className="experience-role">{experience.role}</span>
                      <span className="experience-period">{experience.year}</span>
                    </h3>
                  </div>
                  <p className="experience-summary">{experience.highlights[0]}</p>
                  <details className="experience-details">
                    <summary>{language === 'PT' ? `Ver mais sobre ${experience.company}` : `More about ${experience.company}`}</summary>
                    {experience.positions?.map(position => (
                      <div className="experience-position" key={position.role}>
                        <h4>{position.role}</h4>
                        <p>{position.period}</p>
                        {position.highlights && <ul>{position.highlights.map(highlight => <li key={highlight}><CheckCircle size={15} /><span>{highlight}</span></li>)}</ul>}
                        {position.tools && <TagList className="case-stack" items={position.tools} />}
                      </div>
                    ))}
                    {!experience.positions && <ul>
                      {experience.highlights.slice(1).map(highlight => (
                        <li key={highlight}>
                          <CheckCircle size={15} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>}
                    {experience.tools && (
                      <div className="experience-tools">
                        <p>{language === 'PT' ? 'Ferramentas e práticas' : 'Tools and practices'}</p>
                        <TagList className="case-stack" items={experience.tools} />
                      </div>
                    )}
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="tecnologias" aria-labelledby="tecnologias-title">
          <div className="card section-card">
            <div className="section-bubble"><h2 id="tecnologias-title" tabIndex="-1">{t.technologiesTitle}</h2></div>
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
                        <TagList className="ai-tools" items={tools} />
                        <ul className="ai-use-cases">
                          {items.map(item => (
                            <li key={item}>
                              <CheckCircle size={16} aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <TagList className="skill-items" items={items} />
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section personal-projects" id="projetos" aria-labelledby="projects-title">
          <div className="card section-card">
            <div className="section-heading text-pretty">
              <h2 id="projects-title" tabIndex="-1">{t.projectsTitle}</h2>
              <p>{t.projectsSubtitle}</p>
            </div>
            <div className="projects-grid">
              <article className="card project-card featured-project">
                <div className="project-heading">
                  <span className="project-icon" aria-hidden="true"><Code2 size={24} /></span>
                </div>
                <h3>{t.featuredProjectTitle}</h3>
                <p>{t.featuredProjectDescription}</p>
                <TagList className="case-stack" items={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Chart.js']} />
                <ActionLink variant="secondary" className="project-action" href="https://github.com/marceloespnd/quality-vision" target="_blank" rel="noreferrer">
                  <FaGithub size={18} aria-hidden="true" /> {language === 'PT' ? 'Ver Quality Vision no GitHub' : 'View Quality Vision on GitHub'}
                </ActionLink>
              </article>
              <article className="card project-card">
                <div className="project-heading">
                  <span className="project-icon" aria-hidden="true"><Briefcase size={24} /></span>
                </div>
                <h3>{t.dashboardTitle}</h3>
                <p>{t.dashboardDescription}</p>
                <TagList className="case-stack" items={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase']} />
                <ActionLink variant="secondary" className="project-action" href="https://github.com/marceloespnd/veltrix-workspace" target="_blank" rel="noreferrer">
                  <FaGithub size={18} aria-hidden="true" /> {language === 'PT' ? 'Ver Veltrix Dashboard no GitHub' : 'View Veltrix Dashboard on GitHub'}
                </ActionLink>
              </article>
              <article className="card project-card">
                <div className="project-heading">
                  <span className="project-icon" aria-hidden="true"><Wallet size={24} /></span>
                </div>
                <h3>{t.oikonomiaTitle}</h3>
                <p>{t.oikonomiaDescription}</p>
                <TagList className="case-stack" items={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase']} />
                <ActionLink variant="secondary" className="project-action" href="https://github.com/marceloespnd/oikonomia" target="_blank" rel="noreferrer">
                  <FaGithub size={18} aria-hidden="true" /> {language === 'PT' ? 'Ver Oikonomia no GitHub' : 'View Oikonomia on GitHub'}
                </ActionLink>
              </article>
            </div>
          </div>
        </section>

        <section className="section education-section" id="formacao" aria-labelledby="formacao-title">
          <div className="card section-card">
            <div className="section-bubble"><h2 id="formacao-title" tabIndex="-1">{t.educationTitle}</h2></div>
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
          </div>
        </section>

        <section className="section" id="certificacoes" aria-labelledby="certificacoes-title">
          <article className="card">
            <div className="section-bubble">
            <h2 id="certificacoes-title" tabIndex="-1">{t.certificationsTitle}</h2>
            <p className="section-intro">{t.certificationsSubtitle}</p>
            </div>
            <ul className="certs">
              {t.certifications.map(cert => (
                <li key={cert.name} className="cert-item">
                  {cert.name}
                </li>
              ))}
            </ul>
          </article>

        </section>

        <section className="section" id="idiomas" aria-labelledby="idiomas-title">
          <article className="card languages-block">
            <h2 id="idiomas-title" tabIndex="-1">{t.languagesTitle}</h2>
            <ul>
              {t.languages.map(item => <li key={item.name}><strong>{item.name}:</strong> {item.proficiency}</li>)}
            </ul>
          </article>
        </section>

        <section className="section contact-section" id="contato" aria-labelledby="contato-title">
          <article className="card">
            <div className="section-bubble">
            <h2 id="contato-title" tabIndex="-1">{t.contactTitle}</h2>
            <p className="contact-copy text-pretty">{t.contactText}</p>
            </div>
            <div className="contact-info">
              <span className="button button--secondary contact-location"><MapPin size={16} aria-hidden="true" /> {language === 'PT' ? profile.location : 'Barueri, SP, Brazil'}</span>
              <ActionLink href={`mailto:${profile.email}`}><Mail size={16}/> {profile.email}</ActionLink>
              <ActionLink href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn size={16}/> LinkedIn</ActionLink>
              <ActionLink href={profile.github} target="_blank" rel="noreferrer"><FaGithub size={16}/> GitHub</ActionLink>
              <ActionLink href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer"><FaWhatsapp size={16}/> WhatsApp</ActionLink>
            </div>
          </article>
        </section>
        </main>
        <footer>
            <p><small className="footer-version">v{appVersion}</small> {t.copyright}</p>
        </footer>
      </section>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
