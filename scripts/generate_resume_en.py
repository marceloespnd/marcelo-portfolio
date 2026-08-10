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
OUTPUT = ROOT / "public" / "resume-marcelo-esperandio-en.pdf"
NAVY = colors.HexColor("#061426")
NAVY_SOFT = colors.HexColor("#0D2036")
BLUE = colors.HexColor("#4E7FA6")
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
    ("VTAL - Quality Engineer", "Aug 2025 - May 2026 | Sao Paulo, Brazil", [
        "Expanded quality coverage across Salesforce FSL and Oracle OSM/SOM integrations, from functional validation to service contracts.",
        "Embedded backend automation into the delivery flow to accelerate regression feedback.",
        "Anticipated integration risks through exploratory and API testing in continuous collaboration with engineering and product.",
    ]),
    ("Sinqia - Software Development Engineer in Test (SDET)", "Nov 2023 - May 2025 | Sao Paulo, Brazil", [
        "Strengthened the backend testing strategy across functional and non-functional requirements.",
        "Integrated automated execution into Azure Pipelines, with quality monitored through SonarQube.",
        "Improved predictability across distributed services with REST APIs, Spring Boot, and contract testing.",
    ]),
    ("Banco PAN - Quality Engineer / QA Chapter Lead", "Oct 2019 - Oct 2023 | Sao Paulo, Brazil", [
        "Advanced frontend and backend automation with Java, Selenium, RestAssured, JUnit 5, and Cucumber.",
        "Embedded quality controls into the Kubernetes migration and Jenkins pipelines, supported by CloudWatch analysis.",
        "Standardized practices and end-to-end strategies through technical leadership of the QA Chapter.",
    ]),
    ("Grupo Abril - Senior, Mid-level, and Junior Test Analyst", "Jan 2013 - Oct 2019 | Sao Paulo, Brazil", [
        "Expanded automated regression coverage with Java, Selenium WebDriver, and JUnit.",
        "Connected requirements, functional testing, and non-functional validation through BDD/Gherkin scenarios.",
        "Increased confidence in changes through user acceptance testing and production monitoring.",
    ]),
    ("NET / Claro - Junior Test Analyst", "Jul 2009 - Dec 2012 | Sao Paulo, Brazil", [
        "Covered critical flows with functional, integration, and non-functional testing.",
        "Identified risks in mobile applications and telecommunications migrations before release.",
        "Improved test and defect traceability with Oracle SQL Developer, SoapUI, TestLink, and Bugzilla.",
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
        Paragraph("Marcelo Esperandio Lucio", styles["ResumeName"]),
        Paragraph("Senior QA Engineer | Test Automation | AI Quality Engineering", styles["ResumeRole"]),
    ]
    contact = Paragraph(
        "Barueri - SP, Brazil<br/>"
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
    canvas.drawRightString(194 * mm, 8 * mm, f"Page {document.page}")
    canvas.restoreState()


def build_resume():
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=16 * mm,
        leftMargin=16 * mm,
        topMargin=14 * mm,
        bottomMargin=17 * mm,
        title="Marcelo Esperandio Lucio - Senior QA Engineer",
        author="Marcelo Esperandio Lucio",
        pageCompression=1,
    )

    story = [
        header(),
        Spacer(1, 7 * mm),
        section_title("Professional Summary"),
        Paragraph(
            "Senior QA Engineer with 17 years of experience in software quality, test automation, "
            "and quality engineering for financial services, telecommunications, media, and technology. "
            "Focused on integrating quality from early development through production, preventing defects, "
            "and enabling reliable continuous delivery.",
            styles["ResumeBody"],
        ),
        section_title("Core Expertise"),
        Table(
            [[Paragraph(text, styles["ResumeTag"]) for text in row] for row in [
                ["Test Automation", "API & Contract Testing", "CI/CD Quality Gates"],
                ["Functional & Exploratory Testing", "Quality Strategy", "AI-assisted Quality Engineering"],
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
        section_title("Professional Experience"),
    ]

    for job in EXPERIENCE[:3]:
        story.append(job_block(*job))

    story.extend([
        PageBreak(),
        section_title("Professional Experience - Continued"),
        job_block(*EXPERIENCE[3]),
        job_block(*EXPERIENCE[4]),
        section_title("Technology Stack"),
        Paragraph(
            "<b>Languages:</b> Java, Python, JavaScript<br/>"
            "<b>Automation:</b> Selenium, Playwright, Cypress, RestAssured, Appium, JUnit 5<br/>"
            "<b>Cloud & CI/CD:</b> Azure Pipelines, Jenkins, Kubernetes, Elastic Beanstalk, CloudWatch, SonarQube<br/>"
            "<b>Data & APIs:</b> Microsoft SQL Server, Oracle, MySQL, NoSQL, Document DB, Athena<br/>"
            "<b>Platforms:</b> Spring Boot, Salesforce FSL, Oracle OSM/SOM, SoapUI, TestLink, Bugzilla",
            styles["ResumeBody"],
        ),
        section_title("AI Applied to Quality Engineering"),
        Paragraph(
            "ChatGPT, Claude, Copilot, Gemini, Codex, and GitHub Copilot applied to test scenario "
            "generation and review, log and failure analysis, test data creation, automation support, code review, "
            "and evaluation of AI-enabled applications.",
            styles["ResumeBody"],
        ),
        section_title("Education"),
        job_block("UNINOVE - Systems Analysis and Development", "Jul 2023 - Dec 2026 | In progress", []),
        job_block("UNINOVE - Computer Systems and Networks", "Jul 2007 - Dec 2009 | Completed", []),
        section_title("Courses & Certifications"),
        Paragraph(
            "Test Management: Test Planning and Bug Management | BDD and Java with Cucumber | "
            "Test Automation with Selenium WebDriver in Java | Agile Project Management and Development "
            "from a QA Perspective",
            styles["ResumeBody"],
        ),
    ])

    doc.build(story, onFirstPage=footer, onLaterPages=footer)


if __name__ == "__main__":
    build_resume()
