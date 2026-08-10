from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "curriculo-marcelo-esperandio.pdf"
NAVY = colors.HexColor("#061426")
LIGHT_BLUE = colors.HexColor("#DCE8F2")
LIGHT = colors.HexColor("#F3F6F9")
TEXT = colors.HexColor("#152638")
MUTED = colors.HexColor("#526274")


pdfmetrics.registerFont(TTFont("Arial", "/System/Library/Fonts/Supplemental/Arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", "/System/Library/Fonts/Supplemental/Arial Bold.ttf"))

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="ResumeName",
    parent=styles["Title"],
    fontName="Arial-Bold",
    fontSize=24,
    leading=27,
    textColor=colors.white,
    alignment=TA_LEFT,
    spaceAfter=5,
))
styles.add(ParagraphStyle(
    name="ResumeRole",
    fontName="Arial",
    fontSize=10.5,
    leading=14,
    textColor=LIGHT_BLUE,
))
styles.add(ParagraphStyle(
    name="ResumeContact",
    fontName="Arial",
    fontSize=8.4,
    leading=12,
    textColor=colors.white,
))
styles.add(ParagraphStyle(
    name="ResumeSection",
    fontName="Arial-Bold",
    fontSize=11.5,
    leading=14,
    textColor=NAVY,
    spaceBefore=7,
    spaceAfter=7,
))
styles.add(ParagraphStyle(
    name="ResumeBody",
    fontName="Arial",
    fontSize=9.2,
    leading=13.2,
    textColor=TEXT,
    spaceAfter=5,
))
styles.add(ParagraphStyle(
    name="ResumeJob",
    fontName="Arial-Bold",
    fontSize=10.2,
    leading=13,
    textColor=NAVY,
))
styles.add(ParagraphStyle(
    name="ResumeMeta",
    fontName="Arial",
    fontSize=8.3,
    leading=11,
    textColor=MUTED,
))
styles.add(ParagraphStyle(
    name="ResumeBullet",
    fontName="Arial",
    fontSize=8.8,
    leading=12.4,
    leftIndent=10,
    firstLineIndent=-7,
    textColor=TEXT,
    spaceAfter=2,
))
styles.add(ParagraphStyle(
    name="ResumeTag",
    fontName="Arial",
    fontSize=8.1,
    leading=10,
    textColor=NAVY,
))


EXPERIENCE = [
    ("VTAL - Quality Engineer", "Ago 2025 - Mai 2026 | São Paulo - SP", [
        "Ampliação da cobertura de qualidade em integrações Salesforce FSL e Oracle OSM/SOM, da validação funcional aos contratos entre serviços.",
        "Automação backend incorporada ao fluxo de entrega para acelerar o feedback sobre regressões.",
        "Riscos de integração antecipados por testes exploratórios, de APIs e colaboração contínua com desenvolvimento e produto.",
    ]),
    ("Sinqia - Software Development Engineer in Test (SDET)", "Nov 2023 - Mai 2025 | São Paulo - SP", [
        "Fortalecimento da estratégia de testes backend, cobrindo requisitos funcionais e não funcionais.",
        "Execução automatizada integrada ao Azure Pipelines, com qualidade acompanhada pelo SonarQube.",
        "Maior previsibilidade entre serviços distribuídos por meio de APIs REST, Spring Boot e testes de contrato.",
    ]),
    ("Banco PAN - Quality Engineer / Chapter QA", "Out 2019 - Out 2023 | São Paulo - SP", [
        "Evolução da automação frontend e backend com Java, Selenium, RestAssured, JUnit 5 e Cucumber.",
        "Controles de qualidade incorporados à migração para Kubernetes e aos pipelines Jenkins, com análise no CloudWatch.",
        "Padronização de práticas e estratégias ponta a ponta por meio da liderança técnica do Chapter QA.",
    ]),
    ("Grupo Abril - Analista de Testes Sênior, Pleno e Júnior", "Jan 2013 - Out 2019 | São Paulo - SP", [
        "Expansão da regressão automatizada com Java, Selenium WebDriver e JUnit.",
        "Cenários BDD/Gherkin conectando requisitos, testes funcionais e validações não funcionais.",
        "Maior segurança nas mudanças por meio de homologação com usuários e acompanhamento em produção.",
    ]),
    ("NET / Claro - Analista de Testes Júnior", "Jul 2009 - Dez 2012 | São Paulo - SP", [
        "Cobertura de fluxos críticos com testes funcionais, integrados e não funcionais.",
        "Riscos em aplicações móveis e migrações de telecomunicações identificados antes da entrega.",
        "Rastreabilidade de testes e defeitos com Oracle SQL Developer, SoapUI, TestLink e Bugzilla.",
    ]),
]


def section_title(text):
    return Table(
        [[Paragraph(text.upper(), styles["ResumeSection"])], [""]],
        colWidths=[178 * mm],
        rowHeights=[7 * mm, 0.7 * mm],
        style=TableStyle([
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ("BACKGROUND", (0, 1), (-1, 1), LIGHT_BLUE),
        ]),
    )


def job_block(title, meta, bullets):
    items = [
        Paragraph(title, styles["ResumeJob"]),
        Paragraph(meta, styles["ResumeMeta"]),
        Spacer(1, 2),
    ]
    items.extend(Paragraph(f"- {bullet}", styles["ResumeBullet"]) for bullet in bullets)
    items.append(Spacer(1, 4))
    return KeepTogether(items)


def header():
    identity = [
        Paragraph("Marcelo Esperândio Lúcio", styles["ResumeName"]),
        Paragraph("Senior QA Engineer | Test Automation | AI Quality Engineering", styles["ResumeRole"]),
    ]
    contact = Paragraph(
        "Barueri - SP, Brasil<br/>"
        "+55 13 99142-9394 | marcelo.esperandio@outlook.com<br/>"
        "linkedin.com/in/marceloesperandio | github.com/marceloesperandio",
        styles["ResumeContact"],
    )
    table = Table([[identity, contact]], colWidths=[105 * mm, 67 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (0, 0), 9 * mm),
        ("RIGHTPADDING", (0, 0), (0, 0), 5 * mm),
        ("LEFTPADDING", (1, 0), (1, 0), 4 * mm),
        ("RIGHTPADDING", (1, 0), (1, 0), 7 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 8 * mm),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8 * mm),
    ]))
    return table


def footer(canvas, document):
    canvas.saveState()
    canvas.setStrokeColor(LIGHT_BLUE)
    canvas.line(16 * mm, 12 * mm, 194 * mm, 12 * mm)
    canvas.setFont("Arial", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(16 * mm, 8 * mm, "marceloesnd.com")
    canvas.drawRightString(194 * mm, 8 * mm, f"Página {document.page}")
    canvas.restoreState()


def build_resume():
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=16 * mm,
        leftMargin=16 * mm,
        topMargin=14 * mm,
        bottomMargin=17 * mm,
        title="Marcelo Esperândio Lúcio - Senior QA Engineer",
        author="Marcelo Esperândio Lúcio",
        subject="Currículo profissional",
        pageCompression=1,
    )

    story = [
        header(),
        Spacer(1, 7 * mm),
        section_title("Resumo Profissional"),
        Paragraph(
            "Senior QA Engineer com 17 anos de experiência em qualidade de software, automação de testes e "
            "construção de processos de qualidade nos setores financeiro, telecomunicações, mídia e tecnologia. "
            "Atuação ponta a ponta, integrando QA desde as etapas iniciais do desenvolvimento até a produção, "
            "com foco em prevenção de falhas, testes de APIs, contratos e entrega contínua.",
            styles["ResumeBody"],
        ),
        section_title("Principais Competências"),
        Table(
            [[Paragraph(text, styles["ResumeTag"]) for text in row] for row in [
                ["Automação de Testes", "APIs e Testes de Contrato", "Qualidade em CI/CD"],
                ["Testes Funcionais e Exploratórios", "Estratégia de Qualidade", "IA aplicada à Qualidade"],
            ]],
            colWidths=[59.3 * mm] * 3,
            style=TableStyle([
                ("BACKGROUND", (0, 0), (-1, -1), LIGHT),
                ("BOX", (0, 0), (-1, -1), 0.5, LIGHT_BLUE),
                ("INNERGRID", (0, 0), (-1, -1), 0.5, LIGHT_BLUE),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 4 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 3 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 3 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3 * mm),
            ]),
        ),
        Spacer(1, 3 * mm),
        section_title("Experiência Profissional"),
    ]

    for job in EXPERIENCE[:3]:
        story.append(job_block(*job))

    story.extend([
        PageBreak(),
        section_title("Experiência Profissional - Continuação"),
        job_block(*EXPERIENCE[3]),
        job_block(*EXPERIENCE[4]),
        section_title("Stack Técnica"),
        Paragraph(
            "<b>Linguagens:</b> Java, Python, JavaScript<br/>"
            "<b>Automação:</b> Selenium, Playwright, Cypress, RestAssured, Appium, JUnit 5<br/>"
            "<b>Cloud e CI/CD:</b> Azure Pipelines, Jenkins, Kubernetes, Elastic Beanstalk, CloudWatch, SonarQube<br/>"
            "<b>Dados e APIs:</b> Microsoft SQL Server, Oracle, MySQL, NoSQL, Document DB, Athena<br/>"
            "<b>Plataformas:</b> Spring Boot, Salesforce FSL, Oracle OSM/SOM, SoapUI, TestLink, Bugzilla",
            styles["ResumeBody"],
        ),
        section_title("IA Aplicada à Qualidade"),
        Paragraph(
            "ChatGPT, Claude, Copilot, Gemini, Codex e GitHub Copilot aplicados à geração e revisão "
            "de cenários, análise de logs e falhas, criação de massas de teste, apoio à automação, revisão de código "
            "e testes e avaliação de aplicações com IA.",
            styles["ResumeBody"],
        ),
        section_title("Formação Acadêmica"),
        job_block("UNINOVE - Análise e Desenvolvimento de Sistemas", "Jul 2023 - Dez 2026 | Em andamento", []),
        job_block("UNINOVE - Sistemas e Redes de Computador", "Jul 2007 - Dez 2009 | Concluído", []),
        section_title("Cursos e Certificações"),
        Paragraph(
            "Gerenciamento de Testes: Plano de Testes e Gestão de Bugs | BDD e Java com Cucumber | "
            "Automação de Testes com Selenium WebDriver em Java | Gestão e Desenvolvimento de Projetos Agile "
            "na Visão do QA",
            styles["ResumeBody"],
        ),
        section_title("Idiomas"),
        Paragraph(
            "<b>Português:</b> Nativo &nbsp;&nbsp; | &nbsp;&nbsp; "
            "<b>Inglês:</b> Leitura técnica e evolução contínua para comunicação profissional",
            styles["ResumeBody"],
        ),
    ])

    doc.build(story, onFirstPage=footer, onLaterPages=footer)


if __name__ == "__main__":
    build_resume()
