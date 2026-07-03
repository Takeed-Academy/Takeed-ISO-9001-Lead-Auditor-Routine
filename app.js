const STORAGE_KEY = "takeedIso9001LeadAuditorRoutine.v1";

const accessProfiles = {
  "TA-QMS-LA-2026": {
    role: "Candidate",
    cohort: "QMS-LA-2026",
    permissions: "Routine, assets, and 100-question mock exam",
    examWindow: "120 minutes"
  },
  "TA-QMS-LA-TUTOR": {
    role: "Tutor",
    cohort: "Instructor preview",
    permissions: "Full course preview and mock exam",
    examWindow: "120 minutes"
  }
};

const days = [
  {
    id: 1,
    title: "Foundations & Context",
    subtitle: "QMS thinking, Clause 4, process approach",
    summary: "Build the audit lens: quality principles, process approach, PDCA, risk-based thinking, organizational context, interested parties, scope, and the NileTrust audit trail.",
    focus: ["M1 concepts", "Clause 4", "W1 PESTEL/SWOT", "Scope statement"],
    sessions: [
      { time: "08:30-09:15", title: "Opening audit mindset", text: "Contract the week, set the pass target, and convert ISO 9001 from paperwork into evidence-based process performance.", tags: ["Kickoff", "Exam brief"] },
      { time: "09:15-10:45", title: "QMS foundations", text: "Customer focus, process approach, PDCA, continual improvement, risk-based thinking, ISO 9000 family, and Annex SL structure.", tags: ["M1", "Concepts"] },
      { time: "11:00-12:45", title: "Context and interested parties", text: "Audit Clause 4.1 and 4.2 using PESTEL, SWOT, needs, expectations, and QMS requirement decisions.", tags: ["Clause 4.1", "Clause 4.2", "W1"] },
      { time: "13:45-15:30", title: "Scope and processes", text: "Draft and challenge the QMS scope, then map core processes, interactions, inputs, outputs, risks, and expected evidence.", tags: ["Clause 4.3", "Clause 4.4"] },
      { time: "15:45-17:15", title: "Active recall and evidence drill", text: "Run a 25-question oral drill and write five audit questions for NileTrust's context, parties, scope, and process map.", tags: ["Recall", "Evidence"] }
    ],
    tasks: [
      ["Complete the PESTEL scan", "Capture external factors that can affect service quality, conformity, and customer satisfaction."],
      ["Complete the SWOT scan", "Separate internal weaknesses from external threats and tie both to audit risk."],
      ["List interested parties", "State the need, expectation, QMS requirement decision, and audit implication."],
      ["Draft NileTrust scope", "Use plain wording and justify boundaries, services, branches, digital channels, and outsourced support."],
      ["Map one core process", "Show input, activity, output, owner, risk, control, and evidence."],
      ["Create 12 flashcards", "Use clause intent, audit evidence, and common pitfalls."],
      ["Answer 20 warmup questions", "Do not use notes; mark misses for the evening review."],
      ["Write the day-end audit trail", "One paragraph from context to scope to process evidence."]
    ],
    assets: [
      ["Course Structure", "assets/workshop/03_iso9001_structure_day_map.svg", "Clause journey"],
      ["PESTEL Context", "assets/workshop/04_pestel_qms_context.svg", "Context scan"],
      ["SWOT Position", "assets/workshop/05_swot_qms_position.svg", "Internal and external"],
      ["Process Approach", "assets/workshop/06_process_approach_sipoc.svg", "SIPOC audit view"],
      ["Interested Parties", "assets/workshop/07_interested_parties_map.svg", "Needs and requirements"]
    ],
    domains: ["M1", "M2"]
  },
  {
    id: 2,
    title: "Leadership & Risk",
    subtitle: "Clause 5, Clause 6, policy, RACI, risk register",
    summary: "Turn leadership into auditable evidence, then build risk-based audit priorities with a practical 5x5 method and NileTrust risk register.",
    focus: ["Clause 5", "Clause 6.1", "W2 RACI", "W3 risk register"],
    sessions: [
      { time: "08:30-09:00", title: "Retrieval review", text: "Closed-notes recap of Clause 4 and a short scenario drill on scope exclusions and interested parties.", tags: ["Recall", "Day 1"] },
      { time: "09:00-10:45", title: "Leadership commitment", text: "Audit top management commitment, customer focus, policy, roles, responsibilities, and authorities.", tags: ["Clause 5", "W2"] },
      { time: "11:00-12:45", title: "Risk-based thinking", text: "Connect context and process weaknesses to audit priorities; distinguish risk sources, events, controls, and consequences.", tags: ["Clause 6.1", "ISO 31000"] },
      { time: "13:45-15:30", title: "5x5 scoring lab", text: "Score likelihood and impact for delayed approvals, incomplete records, supplier failures, and inconsistent branch practice.", tags: ["Risk scoring", "W3"] },
      { time: "15:45-17:15", title: "Policy and RACI challenge", text: "Test whether policy, objectives, process ownership, and responsibility assignments are communicated and understood.", tags: ["Evidence", "Interview"] }
    ],
    tasks: [
      ["Audit the quality policy", "Check fit with purpose, strategic direction, objectives, requirements, and improvement."],
      ["Build a RACI extract", "Assign owner, accountable leader, consulted teams, and informed parties for one NileTrust process."],
      ["List five process risks", "Use customer complaints, rework, supplier issues, branch variation, and record gaps."],
      ["Score the risk register", "Rank each risk using likelihood, impact, existing controls, and residual priority."],
      ["Write six leadership questions", "Make each question evidence-seeking rather than yes/no."],
      ["Do a 30-minute clause recall", "Explain Clauses 5 and 6 without opening the book."],
      ["Complete 25 practice questions", "Review every wrong answer and classify it by clause or judgement gap."],
      ["Update the audit trail", "Show how context and leadership drive risk-based audit focus."]
    ],
    assets: [
      ["Audit Principles", "assets/workshop/08_audit_principles_iso19011.svg", "Audit discipline"],
      ["Risk Matrix", "assets/workshop/11_risk_opportunity_matrix.svg", "5x5 prioritization"],
      ["Quality Objectives", "assets/workshop/12_quality_objectives_kpi_table.svg", "Measurable goals"],
      ["Course at a Glance", "assets/reference/course-at-glance.svg", "Takeed facts"]
    ],
    domains: ["M1", "M2", "M3"]
  },
  {
    id: 3,
    title: "Treatment, Audit Plan & Support",
    subtitle: "Audit planning, objectives, Clause 7 support",
    summary: "Move from risk to planned audit work: criteria, scope, sampling, audit plan, quality objectives, competence, awareness, communication, and documented information.",
    focus: ["Audit plan", "Clause 6.2", "Clause 7", "W4-W6"],
    sessions: [
      { time: "08:30-09:00", title: "Clause 5-6 pressure drill", text: "Rapid questions on policy, roles, risk treatment, measurable objectives, and change planning.", tags: ["Recall", "Day 2"] },
      { time: "09:00-10:45", title: "Audit programme and plan", text: "Define objectives, scope, criteria, methods, resources, responsibilities, risks, and sampling logic.", tags: ["ISO 19011", "W4"] },
      { time: "11:00-12:45", title: "Quality objectives", text: "Audit whether objectives are measurable, monitored, communicated, updated, and aligned with customer and process risks.", tags: ["Clause 6.2", "W5"] },
      { time: "13:45-15:30", title: "Support controls", text: "Audit competence, awareness, communication, infrastructure, environment, and organizational knowledge.", tags: ["Clause 7.1-7.4"] },
      { time: "15:45-17:15", title: "Documented information lab", text: "Trace document control, version status, access, retention, change approval, and records needed as evidence.", tags: ["Clause 7.5", "W6"] }
    ],
    tasks: [
      ["Draft an audit plan", "Include objective, scope, criteria, date, process owners, methods, and sample focus."],
      ["Build a checklist extract", "Write questions that ask for objective evidence and follow the process trail."],
      ["Audit three objectives", "Check metric, target, owner, monitoring frequency, risk link, and evidence."],
      ["Create a competence sample", "Select one role, required competence, evidence, gap, and action."],
      ["Write a communication plan", "Map what is communicated, by whom, to whom, when, and how."],
      ["Test document control", "Find one procedure and one record; verify approval, revision, access, and retention."],
      ["Complete 30 practice questions", "Use a 40-minute timer and flag anything that takes too long."],
      ["Prepare opening meeting notes", "Make the opening clear, neutral, and audit-objective focused."]
    ],
    assets: [
      ["Audit Programme", "assets/workshop/09_audit_programme_cycle.svg", "Programme cycle"],
      ["Lead Auditor Workflow", "assets/workshop/10_lead_auditor_workflow.svg", "Audit flow"],
      ["Communication Plan", "assets/workshop/13_communication_plan.svg", "Communication control"],
      ["Documented Information", "assets/workshop/14_documented_information_control.svg", "Document control"]
    ],
    domains: ["M2", "M3", "M4"]
  },
  {
    id: 4,
    title: "Operation & Performance",
    subtitle: "Clause 8, Clause 9, interviews, evidence, review",
    summary: "Test whether the QMS works in real operations: customer requirements, service controls, outsourced providers, release, nonconforming outputs, monitoring, internal audit, and management review.",
    focus: ["Clause 8", "Clause 9", "W7-W8", "Interview evidence"],
    sessions: [
      { time: "08:30-09:00", title: "Audit plan standup", text: "Each learner defends one sample choice, one risk priority, and one expected record before the audit role-play.", tags: ["Planning", "Evidence"] },
      { time: "09:00-10:45", title: "Operational planning and control", text: "Audit requirements review, changes, outsourced processes, service delivery controls, release, and nonconforming outputs.", tags: ["Clause 8", "W7"] },
      { time: "11:00-12:45", title: "Evidence collection role-play", text: "Interview a process owner, verify records, observe workflow, and follow contradictions without arguing.", tags: ["Interview", "Sampling"] },
      { time: "13:45-15:15", title: "Performance evaluation", text: "Test monitoring, analysis, customer satisfaction, internal audit programme, and management review inputs and outputs.", tags: ["Clause 9", "W8"] },
      { time: "15:30-17:15", title: "Finding writing clinic", text: "Turn evidence into conformity, opportunity, or nonconformity statements with clause reference and audit trail.", tags: ["Judgement", "Writing"] }
    ],
    tasks: [
      ["Trace one customer requirement", "Follow it from request to review, delivery, acceptance, and complaint handling."],
      ["Audit an outsourced process", "Check controls over provider selection, communication, monitoring, and performance evidence."],
      ["Write five interview questions", "Use open questions, follow-ups, and evidence confirmation."],
      ["Sample three records", "State why the sample is enough or why more evidence is needed."],
      ["Review monitoring results", "Check indicators, trend analysis, action, and link to objectives."],
      ["Audit management review", "Confirm inputs, outputs, decisions, resource needs, and improvement actions."],
      ["Complete 40 practice questions", "Sit them in one run; aim for 72 seconds per question."],
      ["Draft two findings", "One conformity and one nonconformity with objective evidence."]
    ],
    assets: [
      ["Operational Control", "assets/workshop/15_operational_process_control.svg", "Clause 8 flow"],
      ["Management Review", "assets/workshop/17_management_review_inputs_outputs.svg", "Review evidence"],
      ["Corrective Action Flow", "assets/workshop/16_nonconformity_corrective_action_flow.svg", "NC handling"],
      ["NileTrust Case", "assets/workshop/19_niletrust_financial_case_context.svg", "Running case"]
    ],
    domains: ["M2", "M5", "M6"]
  },
  {
    id: 5,
    title: "Full Mock Exam",
    subtitle: "100-question mock only",
    summary: "Day 5 is reserved for exam conditions: access check, pacing discipline, a 100-question mock, review of flagged or blank answers, and a targeted score repair plan.",
    focus: ["100-question mock", "120 minutes", "70% pass", "Review misses"],
    sessions: [
      { time: "08:30-08:50", title: "Access and exam setup", text: "Confirm candidate access, quiet room, timer, calculator-free rules, and the no-blank-answer strategy.", tags: ["Access", "Setup"] },
      { time: "08:50-09:10", title: "Pacing rehearsal", text: "Set the target pace, flagging rule, and review checkpoint before opening the mock paper.", tags: ["Pacing", "Flags"] },
      { time: "09:10-11:10", title: "Full mock attempt", text: "Answer 100 questions in 120 minutes using the simulator, timer, flagging, and review grid.", tags: ["100 questions", "120 minutes"] },
      { time: "11:10-11:30", title: "Submit and score review", text: "Submit the attempt, read the domain breakdown, and identify every domain below the 70% readiness line.", tags: ["Score", "Domains"] },
      { time: "13:30-15:00", title: "Mock-only repair round", text: "Review missed and blank questions, then repeat the weakest question groups before any second attempt.", tags: ["Misses", "Retake"] }
    ],
    tasks: [
      ["Confirm candidate access", "Sign in, confirm the cohort, and check the 120-minute exam window."],
      ["Set pacing target", "Use 72 seconds per question and reserve review time for flagged items."],
      ["Start the 100-question mock", "Use the simulator only; do not open notes during the timed attempt."],
      ["Answer every question", "Leave no blanks. Select the best answer even when uncertain."],
      ["Flag hard questions", "Mark difficult items and return through the review grid before submitting."],
      ["Submit the mock", "Confirm final submission and capture the provisional score."],
      ["Review missed questions", "Use the quality review panel to read correct answers and rationales."],
      ["Write the repair plan", "List domains below 70%, then schedule a focused retake block."]
    ],
    assets: [
      ["Corrective Action Flow", "assets/workshop/16_nonconformity_corrective_action_flow.svg", "Clause 10"],
      ["Certification Readiness", "assets/workshop/18_certification_readiness_stage1_stage2.svg", "Stage 1 and Stage 2"],
      ["Exam at a Glance", "assets/reference/exam-at-glance.svg", "100/120/70"],
      ["End Page Mark", "assets/workshop/20_end_page_mark.svg", "Finish line"]
    ],
    domains: ["M5", "M6", "M7"]
  }
];

const domainWeights = [
  ["M1", "Quality principles and ISO 9001 concepts", 20],
  ["M2", "ISO 9001 requirements", 25],
  ["M3", "Audit principles and programme management", 15],
  ["M4", "Audit planning and preparation", 15],
  ["M5", "Conducting audits and collecting evidence", 15],
  ["M6", "Findings, reporting and follow-up", 5],
  ["M7", "Certification audit context", 5]
];

const assetLibrary = [
  ["Course at a Glance", "assets/reference/course-at-glance.svg", "Takeed course facts"],
  ["Examination at a Glance", "assets/reference/exam-at-glance.svg", "Takeed exam facts"],
  ["Workshop Cover", "assets/workshop/01_cover_workshop_book.svg", "Workshop book"],
  ["Workbook Use", "assets/workshop/02_how_to_use_workbook.svg", "Study method"],
  ["ISO 9001 Structure", "assets/workshop/03_iso9001_structure_day_map.svg", "Course map"],
  ["PESTEL QMS Context", "assets/workshop/04_pestel_qms_context.svg", "Context analysis"],
  ["SWOT QMS Position", "assets/workshop/05_swot_qms_position.svg", "Position analysis"],
  ["Process SIPOC", "assets/workshop/06_process_approach_sipoc.svg", "Process approach"],
  ["Interested Parties", "assets/workshop/07_interested_parties_map.svg", "Clause 4.2"],
  ["Audit Principles", "assets/workshop/08_audit_principles_iso19011.svg", "ISO 19011"],
  ["Audit Programme", "assets/workshop/09_audit_programme_cycle.svg", "Programme cycle"],
  ["Lead Auditor Workflow", "assets/workshop/10_lead_auditor_workflow.svg", "Workflow"],
  ["Risk Opportunity Matrix", "assets/workshop/11_risk_opportunity_matrix.svg", "Risk scoring"],
  ["Objectives KPI Table", "assets/workshop/12_quality_objectives_kpi_table.svg", "Objectives"],
  ["Communication Plan", "assets/workshop/13_communication_plan.svg", "Communication"],
  ["Documented Information", "assets/workshop/14_documented_information_control.svg", "Document control"],
  ["Operational Process Control", "assets/workshop/15_operational_process_control.svg", "Operations"],
  ["NC Corrective Action", "assets/workshop/16_nonconformity_corrective_action_flow.svg", "Corrective action"],
  ["Management Review", "assets/workshop/17_management_review_inputs_outputs.svg", "Review"],
  ["Certification Readiness", "assets/workshop/18_certification_readiness_stage1_stage2.svg", "Stage 1 and 2"],
  ["NileTrust Context", "assets/workshop/19_niletrust_financial_case_context.svg", "Running case"],
  ["End Page Mark", "assets/workshop/20_end_page_mark.svg", "Completion"]
];

const q = (domain, clause, type, prompt, options, answer, rationale) => ({
  domain,
  clause,
  type,
  prompt,
  options,
  answer,
  rationale
});

const rawQuestionBank = [
  q("M1", "Concepts", "MCQ", "Which action best demonstrates risk-based thinking during a QMS audit?", ["Selecting samples from processes with the highest effect on customer conformity.", "Checking only the newest procedure because it is easiest to find.", "Interviewing only senior management because they approve the QMS.", "Avoiding high-risk processes until the closing meeting."], 0, "Risk-based thinking directs audit attention to matters that can affect intended QMS results."),
  q("M1", "Concepts", "MCQ", "NileTrust has many procedures but loan approvals still suffer rework. What principle should the auditor emphasize?", ["Document volume is less important than process effectiveness and evidence.", "Every process must have the same number of forms.", "The QMS is effective when every employee signs a policy once.", "Rework is outside the QMS if customers eventually receive service."], 0, "A QMS is judged by process performance, conformity, and customer satisfaction, not by paperwork alone."),
  q("M1", "Concepts", "True/False", "The process approach asks auditors to consider inputs, activities, outputs, owners, resources, risks, controls, and measures.", ["True", "False"], 0, "The process approach follows how work actually creates outputs and how controls support conformity."),
  q("M1", "Concepts", "MCQ", "Which option is the best example of objective evidence?", ["A dated complaint trend report with source records available for sampling.", "A manager saying the team is usually careful.", "A poster that says quality matters.", "A candidate's personal opinion about a branch."], 0, "Objective evidence is verifiable information, such as records, observations, or confirmed statements."),
  q("M1", "Concepts", "MCQ", "What does PDCA help an auditor understand?", ["How the organization plans, operates, checks results, and improves the QMS.", "How to replace interviews with document review.", "How to avoid sampling when time is limited.", "How to certify a company without a Stage 2 audit."], 0, "PDCA is a practical model for planning, doing, checking, and acting on results."),
  q("M1", "Concepts", "MCQ", "A learner says ISO 9001 is mainly an IT system. What is the best correction?", ["ISO 9001 is a management system for consistent quality and customer satisfaction.", "ISO 9001 only applies to software companies.", "ISO 9001 is a database security standard.", "ISO 9001 requires all records to be electronic."], 0, "ISO 9001 is a quality management system standard across sectors, not an IT-only system."),
  q("M1", "Concepts", "MCQ", "Which statement best separates correction from corrective action?", ["Correction fixes the immediate issue; corrective action addresses the cause to prevent recurrence.", "Correction is only for major nonconformities; corrective action is only for minor ones.", "Correction requires management review; corrective action does not.", "Correction and corrective action are the same activity."], 0, "Corrective action goes beyond the immediate fix by addressing root cause."),
  q("M1", "Concepts", "MCQ", "A useful quality objective should be:", ["Measurable, relevant, monitored, communicated, and updated when needed.", "A slogan that cannot be measured.", "A target known only to the quality manager.", "Identical for every process regardless of risk."], 0, "Objectives need measurable planning, monitoring, communication, and relevance to the QMS."),
  q("M1", "Concepts", "MCQ", "What is the audit value of identifying interested parties?", ["It helps determine which needs and expectations become QMS requirements.", "It replaces the need for customer feedback.", "It proves the organization has no external obligations.", "It allows the auditor to ignore outsourced providers."], 0, "Interested party analysis links relevant needs to QMS requirements and audit implications."),
  q("M1", "Concepts", "MCQ", "The strongest QMS scope statement is the one that:", ["Defines products, services, boundaries, applicability, and justified exclusions.", "Uses the shortest wording possible with no explanation.", "Excludes any weak process to reduce audit risk.", "Copies another organization's scope exactly."], 0, "Scope must reflect the organization, its services, boundaries, and applicability decisions."),
  q("M1", "Audit terms", "MCQ", "Audit criteria are best described as:", ["The requirements used as the reference for audit evidence and conclusions.", "The auditor's personal expectations.", "The number of people interviewed.", "The final certificate design."], 0, "Criteria are the requirements against which evidence is compared."),
  q("M1", "Audit terms", "MCQ", "Conformity is demonstrated when:", ["Evidence shows the requirement is fulfilled.", "The auditee promises to improve later.", "The auditor cannot find the procedure quickly.", "The process owner has worked there for many years."], 0, "Conformity is based on evidence fulfilling the relevant requirement."),
  q("M1", "Context", "MCQ", "Which item is an external context issue for NileTrust?", ["New financial-sector customer protection rules.", "A poorly controlled internal spreadsheet.", "An untrained loan officer.", "A missing signature on a local form."], 0, "External context includes outside factors such as regulation, markets, technology, and social expectations."),
  q("M1", "Leadership", "MCQ", "Leadership commitment is best verified by:", ["Evidence that leaders integrate the QMS into business processes and support resources.", "A framed policy in reception only.", "A single email from the quality manager.", "A consultant's claim that management is supportive."], 0, "Leadership is tested through visible integration, resources, accountability, and customer focus."),
  q("M1", "Competence", "MCQ", "When auditing competence, the auditor should look for:", ["Required competence, evidence of current competence, and actions for gaps.", "Only the total training budget.", "Only job titles.", "Only whether people attended induction."], 0, "Competence audits connect role needs, evidence, evaluation, and gap closure."),
  q("M1", "Monitoring", "MCQ", "A KPI is useful to the QMS when it:", ["Shows process performance against relevant objectives and triggers action when needed.", "Is collected because software can produce it.", "Always improves month after month.", "Is kept confidential from process owners."], 0, "Measures should support decisions about process performance and improvement."),
  q("M1", "Management review", "MCQ", "The main audit purpose of management review is to confirm that top management:", ["Evaluates QMS suitability, adequacy, effectiveness, and needed changes.", "Approves every individual customer record.", "Personally writes every procedure.", "Avoids discussing audit results."], 0, "Management review is a leadership mechanism for evaluating and improving the QMS."),
  q("M1", "Sampling", "MCQ", "Audit sampling is acceptable when:", ["The sample is planned, risk-aware, and sufficient for the audit objective.", "It is random only because the auditor is short of time.", "It avoids all negative records.", "It includes only records chosen by the auditee."], 0, "Samples need a reasoned basis and should support reliable conclusions."),
  q("M1", "Traceability", "MCQ", "A strong audit trail for a complaint process follows:", ["Requirement, complaint record, investigation, action, communication, closure, and trend review.", "Only the complaint log total.", "Only the process owner's explanation.", "Only the policy statement."], 0, "Traceability links records and actions across the process from requirement to outcome."),
  q("M1", "Improvement", "True/False", "Continual improvement can be shown by repeated small changes, not only by large projects.", ["True", "False"], 0, "Improvement may be incremental, corrective, innovative, or reorganizational when it improves QMS performance."),

  q("M2", "4.1", "MCQ", "NileTrust expanded into digital channels and complaint delays increased. What should the auditor verify first under Clause 4.1?", ["Whether internal and external issues affecting QMS results have been determined and monitored.", "Whether every branch uses the same wall color.", "Whether the CEO personally handles each complaint.", "Whether the old scope has been archived only."], 0, "Clause 4.1 focuses on relevant internal and external issues that affect QMS intended results."),
  q("M2", "4.2", "MCQ", "A regulator expects complaint responses within a defined timeframe. How should this be treated in the QMS?", ["As a relevant interested-party requirement if it affects conformity and customer satisfaction.", "As optional marketing information.", "As outside scope because it is external.", "As evidence that no customer requirements are needed."], 0, "Relevant needs and expectations can become QMS requirements."),
  q("M2", "4.3", "MCQ", "Which scope decision is most defensible?", ["Include outsourced call-center support because NileTrust controls service requirements and complaint performance.", "Exclude outsourced support because employees are not on NileTrust payroll.", "Exclude branches with weak results until they improve.", "Include the supplier's entire company in NileTrust's certification scope."], 0, "Outsourced processes affecting QMS conformity still need to be controlled within the QMS scope."),
  q("M2", "4.4", "MCQ", "When auditing QMS processes, which evidence set is strongest?", ["Process inputs, outputs, sequence, owners, criteria, resources, risks, controls, and performance results.", "A procedure title and a signature page only.", "A list of employees in the department.", "A single customer compliment."], 0, "Process audits should verify how the process is defined, controlled, measured, and improved."),
  q("M2", "5.1", "MCQ", "Top management says quality is delegated to the quality manager. What is the best audit response?", ["Test whether leadership accountability, integration, resources, and customer focus are actually demonstrated.", "Accept the statement because delegation proves commitment.", "Stop auditing leadership because quality managers own ISO 9001.", "Record a major nonconformity before seeing evidence."], 0, "Leadership can delegate tasks, but not accountability for QMS effectiveness."),
  q("M2", "5.2", "MCQ", "A quality policy is weak when it:", ["Cannot provide a framework for objectives or commitment to requirements and improvement.", "Is available to relevant interested parties.", "Is communicated internally.", "Fits the organization's purpose and strategic direction."], 0, "A policy must support objectives, requirements, and improvement in the organization's context."),
  q("M2", "5.3", "MCQ", "The best evidence for roles and responsibilities is:", ["Defined responsibilities plus interviews showing people understand and apply them.", "A chart that no one uses.", "Only the quality manager's job description.", "A training certificate unrelated to the role."], 0, "Responsibilities need to be assigned, communicated, and understood."),
  q("M2", "6.1", "MCQ", "A risk register exists but no actions are linked to high-risk loan approval delays. What should the auditor do?", ["Check whether actions to address risks are planned, implemented, and evaluated for effectiveness.", "Ignore the issue because a register exists.", "Tell the auditee which software to buy.", "Mark all risks as accepted by default."], 0, "Risk planning requires action and effectiveness evaluation where relevant."),
  q("M2", "6.2", "MCQ", "Which objective is strongest?", ["Reduce loan approval rework from 12% to 5% by Q4, owned by Operations, reviewed monthly.", "Improve quality as soon as possible.", "Be the best branch network.", "Have fewer mistakes than competitors."], 0, "Good objectives are measurable, owned, time-bound, monitored, and relevant."),
  q("M2", "6.3", "MCQ", "NileTrust changes its digital onboarding workflow. What audit evidence is most relevant?", ["Planned change controls covering purpose, consequences, resources, responsibilities, and QMS integrity.", "Only the launch announcement.", "Only the vendor invoice.", "Only a customer-facing banner."], 0, "Changes should be planned to maintain QMS integrity and intended results."),
  q("M2", "7.1", "MCQ", "A process misses targets because records are delayed by insufficient system access. Which support area is most relevant?", ["Resources needed for effective process operation.", "Scope exclusion.", "Certification decision.", "Audit report distribution."], 0, "Resources include what is needed to operate and control processes."),
  q("M2", "7.2", "MCQ", "Which competence evidence is strongest?", ["Role competence criteria, evaluation records, training or experience evidence, and gap actions.", "A course brochure.", "A general HR headcount report.", "A signed attendance sheet with no role link."], 0, "Competence is demonstrated through defined needs and evidence that people meet them."),
  q("M2", "7.3", "MCQ", "An employee knows the policy but not how their work affects quality objectives. What is the issue?", ["Awareness may be incomplete.", "Scope is invalid by default.", "The audit criteria must be changed.", "The process cannot be audited."], 0, "Awareness includes policy, objectives, contribution to QMS effectiveness, and consequences of nonconformity."),
  q("M2", "7.4", "MCQ", "A communication plan should define:", ["What, when, with whom, how, and who communicates.", "Only email font and signature style.", "Only external announcements.", "Only informal supervisor reminders."], 0, "QMS communication needs planned content, timing, audience, method, and responsibility."),
  q("M2", "7.5", "MCQ", "Which finding best indicates weak documented information control?", ["Staff use different versions of the complaint procedure with no approval or revision status control.", "The procedure has a document owner.", "Records are retained for a defined period.", "Obsolete documents are prevented from unintended use."], 0, "Documented information must be controlled for suitability, availability, protection, and change status."),
  q("M2", "8.2", "MCQ", "For customer requirements, the auditor should verify that NileTrust:", ["Determines, reviews, and can meet requirements before committing to service.", "Accepts every request without review.", "Lets each branch define requirements independently.", "Deletes complaint records after closure."], 0, "Customer-related requirements need determination and review before commitment."),
  q("M2", "8.3", "MCQ", "If NileTrust designs a new digital service workflow, what is the best audit focus?", ["Controls for design planning, inputs, outputs, review, verification, validation, and changes if design is applicable.", "Only the marketing launch date.", "Only whether the interface looks modern.", "Only whether the supplier is famous."], 0, "Where design and development applies, controls should cover planned stages and changes."),
  q("M2", "8.4", "MCQ", "How should outsourced call-center performance be audited?", ["Verify controls over provider requirements, selection, monitoring, communication, and performance evidence.", "Ignore it because it is outsourced.", "Audit only the provider's payroll.", "Require the provider to adopt NileTrust's entire QMS without evidence."], 0, "Externally provided processes affecting conformity must be controlled."),
  q("M2", "8.5", "MCQ", "Which evidence best supports controlled service provision?", ["Current work instructions, competent staff, suitable tools, monitoring records, and acceptance criteria.", "A manager's confidence only.", "A customer complaint from last year only.", "An unsigned draft process map."], 0, "Operational control is shown through planned conditions and evidence that they are used."),
  q("M2", "8.6", "MCQ", "Before releasing a service output, NileTrust should have evidence that:", ["Acceptance criteria are met or release is approved under defined authority.", "The customer has no way to complain.", "The auditor has approved the file.", "The quality policy is attached to the record."], 0, "Release should occur after planned arrangements are satisfactorily completed or approved."),
  q("M2", "8.7", "MCQ", "A loan file missing mandatory review evidence is discovered before approval. What should the process do?", ["Control the nonconforming output, prevent unintended use, and take appropriate action.", "Approve it quickly to protect the KPI.", "Delete the record and restart silently.", "Move it outside the QMS."], 0, "Nonconforming outputs need control to prevent unintended delivery or use."),
  q("M2", "9.1", "MCQ", "Which monitoring approach is strongest?", ["Defined indicators, methods, frequency, analysis, evaluation, and action on poor trends.", "Collecting data without review.", "Reviewing only success stories.", "Changing targets after every miss."], 0, "Monitoring and measurement should be planned and used to evaluate performance."),
  q("M2", "9.2", "MCQ", "An internal audit programme should consider:", ["Process importance, changes, previous audit results, risks, and planned intervals.", "Only auditor travel preference.", "Only alphabetical process order.", "Only processes that volunteered."], 0, "Internal audit programmes should be planned using risk, importance, changes, and prior performance."),
  q("M2", "9.3", "MCQ", "Which management review output is valid evidence?", ["Decisions on improvement opportunities, QMS changes, and resource needs.", "Only a lunch agenda.", "Only a list of attendees with no decisions.", "Only the previous year's certificate."], 0, "Management review outputs should include decisions and actions relevant to QMS performance."),
  q("M2", "10.2", "MCQ", "A repeated missing-evidence issue appears again after local corrections. What should be audited next?", ["Whether root cause and corrective action were effective in preventing recurrence.", "Whether the branch can hide the issue.", "Whether the audit team can reduce sample size.", "Whether the quality policy uses better wording."], 0, "Repeat issues often indicate ineffective corrective action or unresolved root cause."),

  q("M3", "ISO 19011", "MCQ", "Which behavior best reflects auditor integrity?", ["Reporting truthfully and resisting pressure to soften evidence-based conclusions.", "Accepting gifts to maintain a friendly audit climate.", "Changing results to match the auditee's preference.", "Skipping difficult areas to finish early."], 0, "Integrity requires honesty, responsibility, and ethical conduct."),
  q("M3", "ISO 19011", "MCQ", "Fair presentation means the audit report should:", ["Reflect audit activities, evidence, findings, and obstacles truthfully and accurately.", "Only report positive points.", "Avoid mentioning disagreements.", "Use vague wording to prevent conflict."], 0, "Fair presentation requires truthful and accurate reporting of audit results."),
  q("M3", "ISO 19011", "MCQ", "Due professional care is best shown by:", ["Applying diligence and judgement appropriate to the audit importance and confidence needed.", "Rushing to finish every interview early.", "Using the same checklist for every audit without adjustment.", "Letting the auditee select all evidence."], 0, "Due care means disciplined judgement, diligence, and competence."),
  q("M3", "ISO 19011", "MCQ", "Confidentiality requires the auditor to:", ["Protect audit information and use it only for legitimate audit purposes.", "Share findings publicly to prove transparency.", "Send records to unrelated colleagues.", "Store candidate data in personal social media accounts."], 0, "Audit information must be safeguarded and used properly."),
  q("M3", "ISO 19011", "MCQ", "Independence is most threatened when:", ["The auditor reviews a process they recently managed.", "The auditor asks for objective evidence.", "The auditor samples records from multiple branches.", "The auditor explains the audit criteria."], 0, "Independence is threatened by conflicts of interest and auditing one's own work."),
  q("M3", "ISO 19011", "MCQ", "Evidence-based approach means conclusions should be based on:", ["Verifiable samples of available information.", "The auditor's mood.", "The auditee's reputation only.", "A single rumor."], 0, "Audit conclusions rely on verifiable evidence gathered through systematic methods."),
  q("M3", "ISO 19011", "MCQ", "Risk-based auditing is used to:", ["Focus audit effort on matters that can affect audit objectives and QMS performance.", "Avoid all low-risk processes forever.", "Guarantee no nonconformities will be found.", "Replace competence requirements."], 0, "Risk-based auditing helps allocate time and depth where it matters most."),
  q("M3", "Audit programme", "MCQ", "An audit programme differs from an audit plan because it:", ["Manages a set of audits over time, while a plan describes one audit's arrangements.", "Is only the closing meeting agenda.", "Is written after certification only.", "Contains only auditor biographies."], 0, "A programme covers broader audit arrangements and priorities across one or more audits."),
  q("M3", "Audit programme", "MCQ", "Which is a programme risk?", ["Insufficient competent auditors for high-risk processes.", "The color of the audit room.", "The number of chairs in reception.", "The font used in the certificate."], 0, "Programme risks affect the ability to achieve audit programme objectives."),
  q("M3", "Audit basics", "MCQ", "Which pairing is correct?", ["Objective: why the audit is performed; scope: boundaries; criteria: requirements.", "Objective: auditor travel; scope: lunch menu; criteria: report cover.", "Objective: certificate logo; scope: candidate ID; criteria: weather.", "Objective: branch decor; scope: email signature; criteria: meeting length."], 0, "Audit objective, scope, and criteria are distinct planning elements."),
  q("M3", "Methods", "MCQ", "A remote audit method is acceptable when:", ["It can achieve objectives and evidence reliability is controlled.", "It is used to avoid all interviews.", "It prevents the auditor from seeing records.", "It removes the need for confidentiality."], 0, "Remote methods must still support reliable evidence and audit objectives."),
  q("M3", "Competence", "MCQ", "When assigning audit team members, the programme manager should consider:", ["Sector knowledge, ISO 9001 competence, audit skills, language, and impartiality.", "Only who is free first.", "Only who lives nearest.", "Only who has the newest laptop."], 0, "Audit team competence and impartiality must fit the audit scope and objectives."),
  q("M3", "Review", "MCQ", "An audit programme should be reviewed to:", ["Confirm objectives are met and improve future audit planning.", "Delete unfavorable findings.", "Avoid management seeing trends.", "Prevent corrective action follow-up."], 0, "Programme review helps improve audit effectiveness."),
  q("M3", "Impartiality", "MCQ", "If an auditor has consulted on the same QMS they will audit, the best action is to:", ["Assess and manage the conflict before assigning them.", "Assign them because they know the system best.", "Hide the relationship from the auditee.", "Let them audit only the process they designed."], 0, "Consulting involvement can create an impartiality threat that must be managed."),
  q("M3", "Audit lifecycle", "MCQ", "Which sequence best reflects an audit lifecycle?", ["Initiate, prepare, conduct, report, complete, and follow up if needed.", "Report, initiate, certify, ignore follow-up.", "Close meeting, scope, criteria, opening meeting.", "Sample, plan, objective, appoint team."], 0, "Audits move from initiation through preparation, conduct, reporting, completion, and follow-up."),

  q("M4", "Preparation", "MCQ", "During document review, the auditor should primarily determine whether:", ["Documented information appears adequate for audit planning and criteria coverage.", "Every page has the same design.", "The auditee's marketing text is attractive.", "The organization deserves a certificate before evidence is collected."], 0, "Document review helps prepare the audit and identify areas needing verification."),
  q("M4", "Audit plan", "MCQ", "A useful audit plan should include:", ["Objectives, scope, criteria, sites, schedule, methods, roles, and reporting arrangements.", "Only the final result.", "Only a list of lunch breaks.", "Only the auditee's preferred questions."], 0, "An audit plan communicates how the audit will be conducted."),
  q("M4", "Team roles", "MCQ", "The lead auditor should assign team responsibilities based on:", ["Competence, audit scope, process risk, and impartiality.", "Alphabetical order.", "Who wants the easiest process.", "Who knows the auditee personally."], 0, "Assignments should fit competence, risk, scope, and independence needs."),
  q("M4", "Sampling", "MCQ", "A high-risk process with repeated complaints should receive:", ["More audit depth or a stronger sample than a stable low-risk process.", "No sample because problems are already known.", "Only one record chosen by the auditee.", "A sample after the closing meeting."], 0, "Sampling depth should reflect risk, importance, and prior performance."),
  q("M4", "Checklist", "MCQ", "A good audit checklist question is:", ["Show how loan approval records demonstrate required review before release.", "Do you comply with ISO 9001?", "Is everything okay?", "Would you like a certificate?"], 0, "Good checklist questions seek evidence linked to requirements and process flow."),
  q("M4", "Opening meeting", "MCQ", "The opening meeting should confirm:", ["Objectives, scope, criteria, methods, timing, communication, confidentiality, and logistics.", "Final certification decision.", "Corrective action acceptance.", "Auditor lunch preferences only."], 0, "Opening meetings align audit arrangements before evidence collection starts."),
  q("M4", "Audit trail", "MCQ", "The best audit trail for delayed approvals starts with:", ["Customer requirement and process risk, then follows records through review, approval, and release.", "The auditor's favorite clause.", "A random policy with no process link.", "The branch with the nicest meeting room."], 0, "Audit trails should follow process logic and risk-relevant evidence."),
  q("M4", "Risk planning", "MCQ", "Which issue should influence audit planning most?", ["A process changed last month and customer complaints increased.", "The procedure file is stored in a blue folder.", "The process owner prefers afternoon meetings.", "The branch has a new logo."], 0, "Recent changes and complaints increase audit relevance and risk."),
  q("M4", "Communication", "MCQ", "Before the audit, the lead auditor should communicate information requests that are:", ["Relevant to scope, criteria, methods, timing, and needed evidence.", "Unlimited and unrelated to the audit.", "Designed to solve the auditee's process problems.", "Kept secret from the auditee."], 0, "Pre-audit communication should support efficient and appropriate evidence collection."),
  q("M4", "Multisite", "MCQ", "For a multisite audit, sampling should consider:", ["Site risk, activities, size, complexity, complaints, and previous results.", "Only which site is closest.", "Only the newest building.", "Only sites chosen by marketing."], 0, "Multisite sampling should be justified by risk and representativeness."),
  q("M4", "Prior results", "MCQ", "A previous nonconformity should be used in planning to:", ["Verify correction, corrective action, recurrence risk, and effectiveness.", "Punish the auditee automatically.", "Avoid that area because it was already audited.", "Delete it from the programme."], 0, "Prior findings help set follow-up and sampling priorities."),
  q("M4", "Schedule", "MCQ", "If the audit schedule leaves no time for review, the main risk is:", ["Weak conclusions because flagged evidence and open trails cannot be checked.", "Too much evidence will be collected.", "The audit will become a consultancy project.", "The criteria will disappear."], 0, "Review time supports reliable conclusions and closing preparation."),
  q("M4", "Criteria", "MCQ", "When audit criteria include legal, customer, and ISO 9001 requirements, the auditor should:", ["Make clear which requirement each evidence test relates to.", "Use only the easiest requirement.", "Ignore legal requirements because ISO 9001 is enough.", "Create new requirements during the audit."], 0, "Evidence and findings should be traceable to applicable criteria."),
  q("M4", "Working documents", "MCQ", "Audit working documents should be controlled so they:", ["Support consistent evidence collection and protect confidential information.", "Replace the audit report.", "Are shared publicly after the audit.", "Contain personal opinions instead of evidence."], 0, "Working documents support audit discipline and confidentiality."),
  q("M4", "Contingency", "MCQ", "If a key process owner is unavailable on audit day, the lead auditor should:", ["Adjust the plan while preserving objectives, evidence coverage, and communication with the auditee.", "Cancel all audit activity immediately.", "Invent interview answers.", "Submit a certificate recommendation without evidence."], 0, "Audit plans can be adjusted, but objectives and evidence reliability must be protected."),

  q("M5", "Interviewing", "MCQ", "Which interview question is strongest?", ["Can you walk me through this complaint from receipt to closure and show the records used?", "Do you always follow the procedure?", "You comply, right?", "Can you confirm there are no problems?"], 0, "Open questions invite process explanation and evidence verification."),
  q("M5", "Observation", "MCQ", "Observation is useful because it:", ["Shows how work is actually performed compared with planned controls.", "Eliminates the need for records.", "Allows the auditor to avoid speaking to staff.", "Automatically proves conformity."], 0, "Observation is one evidence source and should be corroborated as needed."),
  q("M5", "Triangulation", "MCQ", "Triangulation means the auditor:", ["Confirms a conclusion using more than one evidence source when needed.", "Asks the same person the same question three times.", "Samples only three records.", "Uses three auditors for every process."], 0, "Triangulation improves confidence by comparing interviews, records, observations, and data."),
  q("M5", "Evidence", "MCQ", "Which item is least reliable as audit evidence on its own?", ["An unsupported verbal claim that all overdue complaints are closed.", "A controlled complaint closure report.", "A sampled customer communication record.", "A dated corrective action verification record."], 0, "Unsupported claims normally need verification."),
  q("M5", "Evidence", "MCQ", "If evidence is insufficient to support a nonconformity, the auditor should:", ["Continue sampling or record the limitation rather than overstate the finding.", "Write the finding anyway.", "Ask the auditee to choose a clause.", "Ignore the issue completely."], 0, "Findings must be supported by sufficient objective evidence."),
  q("M5", "Sampling", "MCQ", "When sampling records, the auditor should document:", ["What was sampled, why it was selected, and what evidence was found.", "Only the auditor's opinion.", "Only records with positive results.", "Only the file names with no conclusion."], 0, "Sampling notes should support traceability and conclusions."),
  q("M5", "Audit trail", "MCQ", "A process owner shows a KPI miss but no action. The best next step is to:", ["Follow the trail into analysis, responsibility, action planning, and review of effectiveness.", "Move immediately to another process.", "Tell them the exact action to take.", "Delete the KPI from the audit scope."], 0, "Audit trails follow evidence to determine whether the QMS responds effectively."),
  q("M5", "Claims", "MCQ", "An auditee says a missing record is never required. What should the auditor do?", ["Compare the claim with criteria and process requirements before concluding.", "Accept it without review.", "Record a major nonconformity immediately.", "Ask another auditor to decide without evidence."], 0, "The auditor compares evidence and statements to audit criteria."),
  q("M5", "Daily review", "MCQ", "A daily audit team debrief helps to:", ["Review evidence, open trails, consistency, risks, and plan adjustments.", "Negotiate certification results.", "Avoid the closing meeting.", "Replace objective evidence with team opinion."], 0, "Debriefs help manage evidence quality and audit progress."),
  q("M5", "Judgement", "MCQ", "Which conclusion is evidence-based?", ["Three sampled loan files lacked mandatory review evidence required by the procedure.", "The process seems careless.", "The branch culture is bad.", "Management probably ignores quality."], 0, "Findings should be factual, specific, and evidence-based."),
  q("M5", "Opening records", "True/False", "The auditor may adjust the audit trail during the audit when new evidence points to a higher-risk area.", ["True", "False"], 0, "Audit plans can adapt when justified, while maintaining objectives and communication."),
  q("M5", "Process owner", "MCQ", "When a process owner gives an answer that conflicts with a record, the auditor should:", ["Ask neutral follow-up questions and seek additional evidence.", "Accuse the auditee of dishonesty immediately.", "Ignore the record.", "End the interview without notes."], 0, "Contradictions should be handled professionally through further evidence gathering."),
  q("M5", "Remote evidence", "MCQ", "For remote evidence review, the auditor should be especially careful to verify:", ["Authenticity, completeness, access control, confidentiality, and screen-shared evidence limitations.", "The color of the video background.", "The auditee's typing speed.", "Whether the meeting software has a modern logo."], 0, "Remote audits need controls over evidence reliability and confidentiality."),
  q("M5", "Closing meeting", "MCQ", "Before presenting findings, the audit team should:", ["Confirm evidence, clause references, wording, grading, and open issues.", "Let the auditee write the findings.", "Remove findings that may be unpopular.", "Skip review because the timer is visible."], 0, "Findings should be checked for accuracy and support before presentation."),
  q("M5", "Time management", "MCQ", "In a timed exam or audit, the best response to a hard question or open trail is to:", ["Flag it, keep moving, and return with reserved review time.", "Spend all remaining time on it.", "Leave it blank.", "Change the criteria."], 0, "Pacing and review discipline protect overall performance."),

  q("M6", "Findings", "MCQ", "Which nonconformity statement is strongest?", ["In 3 of 8 sampled loan files, mandatory credit-review evidence required by procedure QP-08 was missing.", "Loan approval is bad.", "People do not care about records.", "The branch should buy better software."], 0, "A strong finding states objective evidence and the unmet requirement without blame or advice."),
  q("M6", "Grading", "MCQ", "A nonconformity is more likely to be major when:", ["There is systemic failure or significant risk to QMS ability to achieve intended results.", "The auditor dislikes the document format.", "One low-risk typo is found in a record.", "A staff member is nervous in an interview."], 0, "Grading depends on systemic effect, risk, and failure to meet requirements, not style preferences."),
  q("M6", "Corrective action", "MCQ", "The best corrective action plan includes:", ["Root cause, action, owner, due date, resources, evidence, and effectiveness verification.", "Only a promise to be careful.", "Only correction of the sampled record.", "Only a request to close the finding."], 0, "Corrective action planning should address cause and verify effectiveness."),
  q("M6", "Root cause", "MCQ", "A weak root cause for repeated missing records is:", ["Staff forgot.", "The workflow has no mandatory control point before approval.", "The system does not require upload before release.", "Supervisors do not review record completeness."], 0, "Blaming memory is usually superficial unless supported by system evidence."),
  q("M6", "Follow-up", "MCQ", "Follow-up verification should confirm:", ["Actions were implemented and are effective in preventing recurrence.", "The auditee created a nicer action table.", "The finding title was changed.", "The auditor attended another meeting."], 0, "Follow-up verifies implementation and effectiveness."),

  q("M7", "Stage 1", "MCQ", "The main purpose of Stage 1 certification audit is to:", ["Review readiness, documented information, scope, context, and preparedness for Stage 2.", "Issue the final certificate immediately.", "Replace internal audit.", "Avoid visiting operational processes."], 0, "Stage 1 evaluates readiness and planning for Stage 2."),
  q("M7", "Stage 2", "MCQ", "Stage 2 focuses on:", ["Implementation and effectiveness of the QMS against the audit criteria.", "Only whether the manual exists.", "Only logo usage rules.", "Only payment confirmation."], 0, "Stage 2 evaluates implementation and effectiveness through evidence."),
  q("M7", "Certification decision", "MCQ", "Who should make the personnel or certification decision where applicable?", ["The independent certification body or authorized decision function, not the trainer alone.", "The course tutor during a break.", "The candidate's manager only.", "The auditee's sales team."], 0, "Certification decisions must be impartial and independent from training delivery where required."),
  q("M7", "Surveillance", "MCQ", "Surveillance audits are used to:", ["Confirm the certified system continues to conform and remain effective between recertification audits.", "Repeat only the opening meeting.", "Avoid checking previous findings.", "Replace all internal audits."], 0, "Surveillance provides ongoing confidence during the certification cycle."),
  q("M7", "Recertification", "MCQ", "A recertification audit should consider:", ["QMS performance over the cycle, continued conformity, effectiveness, changes, and previous audit results.", "Only the certificate frame.", "Only the original application form.", "Only whether the audit team is available."], 0, "Recertification reviews continued conformity and effectiveness across the certification cycle.")
];

function orderQuestionOptions(question, id) {
  const indexedOptions = question.options.map((option, index) => ({ option, index }));
  const shift = id % indexedOptions.length;
  const ordered = indexedOptions.slice(shift).concat(indexedOptions.slice(0, shift));
  return {
    ...question,
    id,
    options: ordered.map((item) => item.option),
    answer: ordered.findIndex((item) => item.index === question.answer)
  };
}

const questionBank = rawQuestionBank.map((question, index) => orderQuestionOptions(question, index + 1));

const dailyQuestionIds = {
  1: [1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 21, 24],
  2: [14, 25, 26, 27, 28, 29, 30, 52, 54, 57, 59, 64],
  3: [15, 31, 32, 33, 34, 35, 53, 55, 61, 62, 65, 66],
  4: [16, 17, 18, 19, 36, 38, 39, 40, 41, 42, 43, 44, 76, 78, 80, 85]
};

let state = loadState();
let sprintInterval = null;
let examInterval = null;

const examState = {
  started: false,
  submitted: false,
  confirming: false,
  review: false,
  current: 0,
  answers: {},
  flags: {},
  startedAt: null,
  durationSeconds: 120 * 60,
  remainingSeconds: 120 * 60
};

function loadState() {
  const fallback = { selectedDay: 1, activeView: "routine", done: {}, notes: {}, dailyQuiz: {}, sprintSeconds: 0, user: null };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      ...fallback,
      ...saved,
      done: saved.done || {},
      notes: saved.notes || {},
      dailyQuiz: saved.dailyQuiz || {}
    };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    selectedDay: state.selectedDay,
    activeView: state.activeView,
    done: state.done,
    notes: state.notes,
    dailyQuiz: state.dailyQuiz,
    sprintSeconds: state.sprintSeconds,
    user: state.user
  }));
}

function $(selector, root = document) {
  return root.querySelector(selector);
}

function $all(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function init() {
  if (questionBank.length !== 100) {
    console.warn(`Expected 100 exam questions, found ${questionBank.length}.`);
  }

  bindEvents();
  bindAccessForm();
  renderAccessState();
  if (state.user) {
    renderAll();
  }
  renderIcons();
}

function bindAccessForm() {
  const form = $("#accessForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $("#candidateName").value.trim();
    const email = $("#candidateEmail").value.trim();
    const code = $("#accessCode").value.trim().toUpperCase();
    const error = $("#accessError");

    if (name.length < 3) {
      error.textContent = "Enter the candidate full name.";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error.textContent = "Enter a valid candidate email address.";
      return;
    }

    if (!accessProfiles[code]) {
      error.textContent = "Access code not recognized for this cohort.";
      return;
    }

    const profile = accessProfiles[code];
    state.user = {
      name,
      email,
      accessCode: code,
      role: profile.role,
      cohort: profile.cohort,
      permissions: profile.permissions,
      examWindow: profile.examWindow,
      signedInAt: new Date().toISOString()
    };
    state.activeView = "routine";
    error.textContent = "";
    saveState();
    renderAccessState();
    renderAll();
  });
}

function renderAccessState() {
  const locked = !state.user;
  document.body.classList.toggle("access-locked", locked);

  const userChip = $("#userChip");
  const ticketText = $("#candidateTicketText");
  if (!userChip || !ticketText) return;

  if (locked) {
    userChip.innerHTML = "";
    ticketText.innerHTML = `
      <strong>Takeed Exam Readiness</strong>
      <span>100 questions | 120 minutes | 70% pass</span>
    `;
    return;
  }

  const user = state.user;
  userChip.innerHTML = `
    <strong>${escapeHtml(user.name)}</strong>
    <span>${escapeHtml(user.role)} | ${escapeHtml(user.cohort)}</span>
  `;
  ticketText.innerHTML = `
    <strong>${escapeHtml(user.name)}</strong>
    <span>${escapeHtml(user.role)} access verified | ${escapeHtml(user.examWindow)} exam window</span>
  `;
}

function logoutUser() {
  clearInterval(sprintInterval);
  clearInterval(examInterval);
  state.user = null;
  saveState();
  resetExam(false);
  renderAccessState();
  renderIcons();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    if (button.id === "logoutUser") {
      logoutUser();
      return;
    }

    if (button.dataset.view) {
      setView(button.dataset.view);
      return;
    }

    if (button.dataset.day) {
      state.selectedDay = Number(button.dataset.day);
      state.activeView = "routine";
      saveState();
      renderAll();
      return;
    }

    if (button.dataset.task) {
      toggleTask(Number(button.dataset.task));
      return;
    }

    if (button.dataset.sprint) {
      startSprint(Number(button.dataset.sprint));
      return;
    }

    if (button.id === "clearSprint") {
      stopSprint();
      state.sprintSeconds = 0;
      saveState();
      renderSupportPanel();
      return;
    }

    if (button.dataset.startMock || button.id === "launchExam" || button.id === "startExam") {
      setView("exam");
      startExam();
      return;
    }

    if (button.id === "resetProgress") {
      resetProgress();
      return;
    }

    if (button.dataset.dailyAnswer !== undefined) {
      answerDailyQuiz(Number(button.dataset.dailyAnswer));
      return;
    }

    if (button.dataset.dailyMove !== undefined) {
      moveDailyQuiz(Number(button.dataset.dailyMove));
      return;
    }

    if (button.dataset.dailyReset !== undefined) {
      resetDailyQuiz(Number(button.dataset.dailyReset));
      return;
    }

    if (button.dataset.answer !== undefined) {
      answerCurrent(Number(button.dataset.answer));
      return;
    }

    if (button.id === "prevQuestion") {
      examState.current = Math.max(0, examState.current - 1);
      examState.review = false;
      renderExam();
      return;
    }

    if (button.id === "nextQuestion") {
      examState.current = Math.min(questionBank.length - 1, examState.current + 1);
      examState.review = false;
      renderExam();
      return;
    }

    if (button.id === "flagQuestion") {
      const key = examState.current;
      examState.flags[key] = !examState.flags[key];
      renderExam();
      return;
    }

    if (button.id === "showReview") {
      examState.review = true;
      renderExam();
      return;
    }

    if (button.id === "backToQuestion") {
      examState.review = false;
      renderExam();
      return;
    }

    if (button.dataset.jump) {
      examState.current = Number(button.dataset.jump);
      examState.review = false;
      renderExam();
      return;
    }

    if (button.id === "submitExam") {
      submitExam();
      return;
    }

    if (button.id === "confirmSubmit") {
      finishExam();
      return;
    }

    if (button.id === "cancelSubmit") {
      examState.confirming = false;
      renderExam();
      return;
    }

    if (button.id === "resetExam") {
      resetExam();
    }
  });
}

function renderAll() {
  if (!state.user) {
    renderAccessState();
    renderIcons();
    return;
  }
  renderAccessState();
  renderNavigation();
  renderDayList();
  renderRoutine();
  renderExam();
  renderAssets();
  updateOverallProgress();
  renderIcons();
}

function setView(view) {
  if (!state.user) {
    renderAccessState();
    return;
  }
  state.activeView = view;
  saveState();
  renderNavigation();
  $all(".view-pane").forEach((pane) => pane.classList.remove("is-active"));
  $(`#${view}View`).classList.add("is-active");
  renderIcons();
}

function renderNavigation() {
  $all(".nav-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === state.activeView);
  });
  $all(".view-pane").forEach((pane) => pane.classList.remove("is-active"));
  const pane = $(`#${state.activeView}View`);
  if (pane) pane.classList.add("is-active");
}

function renderDayList() {
  const dayList = $("#dayList");
  dayList.innerHTML = days.map((day) => {
    const percent = getDayPercent(day.id);
    return `
      <button class="day-tab ${day.id === state.selectedDay ? "is-active" : ""}" type="button" data-day="${day.id}">
        <span class="day-number">${day.id}</span>
        <span>
          <strong>Day ${day.id} - ${day.title}</strong>
          <small>${day.subtitle}</small>
        </span>
        <span class="day-pill">${percent}%</span>
      </button>
    `;
  }).join("");
}

function renderRoutine() {
  renderDayPanel();
  renderSupportPanel();
}

function renderDayPanel() {
  const day = getSelectedDay();
  const percent = getDayPercent(day.id);
  const panel = $("#dayPanel");
  const examButton = day.id === 5
    ? `<button class="primary-button" type="button" data-start-mock="true"><i data-lucide="clipboard-check"></i><span>Start 100-Question Mock</span></button>`
    : "";

  panel.innerHTML = `
    <header class="day-hero">
      <div>
        <p class="eyebrow">Day ${day.id}</p>
        <h2>${day.title}</h2>
        <p>${day.summary}</p>
        <div class="tag-row" aria-label="Day focus">${day.focus.map((item) => `<span class="tag">${item}</span>`).join("")}</div>
      </div>
      <div class="day-score">
        <div>
          <strong>${percent}%</strong>
          <span>completed today</span>
        </div>
      </div>
    </header>

    <div class="session-list">
      ${day.sessions.map((session) => `
        <article class="session-card">
          <div class="session-time">${session.time}</div>
          <div>
            <h3>${session.title}</h3>
            <p>${session.text}</p>
            <div class="tag-row">${session.tags.map((tag) => `<span class="tag is-maroon">${tag}</span>`).join("")}</div>
          </div>
        </article>
      `).join("")}
    </div>

    <section class="task-section">
      <div class="section-head">
        <div>
          <p class="eyebrow">Active work</p>
          <h2>Daily Completion Board</h2>
        </div>
        <div class="button-row">${examButton}</div>
      </div>
      <div class="check-grid">
        ${day.tasks.map((task, index) => {
          const key = taskKey(day.id, index);
          const done = Boolean(state.done[key]);
          return `
            <button class="check-item ${done ? "is-done" : ""}" type="button" data-task="${index}">
              <span class="check-box">${done ? iconSvg("check") : ""}</span>
              <span>
                <strong>${task[0]}</strong>
                <span>${task[1]}</span>
              </span>
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderSupportPanel() {
  const day = getSelectedDay();
  const panel = $("#supportPanel");
  panel.innerHTML = `
    <section class="sprint-panel">
      <header>
        <h3>Focus Sprint</h3>
        <span class="tag is-green">Deep work</span>
      </header>
      <div class="sprint-time" id="sprintTime">${formatTime(state.sprintSeconds)}</div>
      <div class="button-row">
        <button class="secondary-button" type="button" data-sprint="25"><i data-lucide="timer"></i><span>25 min</span></button>
        <button class="secondary-button" type="button" data-sprint="45"><i data-lucide="hourglass"></i><span>45 min</span></button>
        <button class="ghost-button" type="button" id="clearSprint"><i data-lucide="square"></i><span>Clear</span></button>
      </div>
    </section>

    ${renderDailyQuizPanel(day)}

    <section class="notes-panel">
      <header>
        <h3>Audit Notes</h3>
        <span class="tag">Day ${day.id}</span>
      </header>
      <textarea id="dayNotes" aria-label="Day ${day.id} notes" placeholder="Evidence, weak clauses, questions to ask, and evening review notes.">${escapeHtml(state.notes[day.id] || "")}</textarea>
    </section>

    <section class="domain-panel">
      <header>
        <h3>Exam Domains</h3>
        <span class="tag">100 marks</span>
      </header>
      <div class="domain-list">
        ${domainWeights.map(([code, title, weight]) => `
          <div class="domain-row">
            <strong>${code} - ${title}</strong>
            <span>${weight}%</span>
            <div class="mini-bar" aria-hidden="true"><i style="width:${weight * 3}%"></i></div>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="visual-strip">
      <header>
        <h3>Day Assets</h3>
        <span class="tag">${day.assets.length} visuals</span>
      </header>
      <div class="visual-list">
        ${day.assets.map(([title, path, caption]) => `
          <a class="visual-link" href="${path}" target="_blank" rel="noreferrer">
            <img src="${path}" alt="${title}">
            <span>
              <strong>${title}</strong>
              <span>${caption}</span>
            </span>
          </a>
        `).join("")}
      </div>
    </section>
  `;

  $("#dayNotes").addEventListener("input", (event) => {
    state.notes[day.id] = event.target.value;
    saveState();
  });

  renderIcons();
}

function renderDailyQuizPanel(day) {
  const questions = getDailyQuestions(day.id);

  if (!questions.length) {
    return `
      <section class="daily-quiz-panel mock-only-panel">
        <header>
          <div>
            <p class="eyebrow">Day ${day.id} assessment</p>
            <h3>Mock questions only</h3>
          </div>
          <span class="tag is-maroon">100 questions</span>
        </header>
        <p>Day 5 has no separate daily quiz. Use the full 100-question mock exam, review screen, timer, and missed-question quality review.</p>
        <div class="mock-steps">
          <span>Access check</span>
          <span>120-minute mock</span>
          <span>Submit once</span>
          <span>Review misses</span>
        </div>
        <button class="primary-button" type="button" data-start-mock="true"><i data-lucide="clipboard-check"></i><span>Start Full Mock</span></button>
      </section>
    `;
  }

  const entry = getDailyQuizEntry(day.id, questions.length);
  const question = questions[entry.current];
  const selected = entry.answers[entry.current];
  const stats = getDailyQuizStats(day.id);
  const answeredPercent = Math.round((stats.answered / stats.total) * 100);
  const complete = stats.answered === stats.total;

  return `
    <section class="daily-quiz-panel">
      <header>
        <div>
          <p class="eyebrow">Day ${day.id} practice questions</p>
          <h3>Separate Daily Quiz</h3>
        </div>
        <span class="tag ${complete && stats.score >= 70 ? "is-green" : ""}">${stats.answered}/${stats.total} answered</span>
      </header>
      <div class="daily-score-row">
        <strong>${stats.correct}/${stats.total} correct</strong>
        <span>${complete ? `${stats.score}% final` : `${answeredPercent}% answered`}</span>
        <div class="mini-bar" aria-hidden="true"><i style="width:${complete ? stats.score : answeredPercent}%"></i></div>
      </div>
      <div class="daily-question-meta">
        <span>Question ${entry.current + 1} of ${questions.length}</span>
        <span>${escapeHtml(question.domain)}</span>
        <span>${escapeHtml(question.clause)}</span>
      </div>
      <p class="daily-question-text">${escapeHtml(question.prompt)}</p>
      <div class="daily-answer-list">
        ${question.options.map((option, index) => {
          const isSelected = selected === index;
          const showCorrect = selected !== undefined && index === question.answer;
          const showWrong = selected !== undefined && isSelected && index !== question.answer;
          const classes = [
            isSelected ? "is-selected" : "",
            showCorrect ? "is-correct" : "",
            showWrong ? "is-wrong" : ""
          ].filter(Boolean).join(" ");
          return `
            <button class="daily-answer ${classes}" type="button" data-daily-answer="${index}">
              <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
              <span>${escapeHtml(option)}</span>
            </button>
          `;
        }).join("")}
      </div>
      ${selected !== undefined ? `
        <div class="daily-rationale ${selected === question.answer ? "is-correct" : "is-wrong"}">
          <strong>${selected === question.answer ? "Correct" : `Correct answer: ${escapeHtml(question.options[question.answer])}`}</strong>
          <p>${escapeHtml(question.rationale)}</p>
        </div>
      ` : `
        <div class="daily-rationale">
          <p>Select an answer to reveal the correct answer and rationale.</p>
        </div>
      `}
      <div class="daily-quiz-footer">
        <div class="button-row">
          <button class="secondary-button" type="button" data-daily-move="-1" ${entry.current === 0 ? "disabled" : ""}><i data-lucide="chevron-left"></i><span>Previous</span></button>
          <button class="secondary-button" type="button" data-daily-move="1" ${entry.current === questions.length - 1 ? "disabled" : ""}><span>Next</span><i data-lucide="chevron-right"></i></button>
        </div>
        <button class="ghost-button" type="button" data-daily-reset="${day.id}"><i data-lucide="rotate-ccw"></i><span>Reset Day Quiz</span></button>
      </div>
    </section>
  `;
}

function getDailyQuestions(dayId) {
  return (dailyQuestionIds[dayId] || [])
    .map((id) => questionBank[id - 1])
    .filter(Boolean);
}

function getDailyQuizEntry(dayId, totalQuestions = getDailyQuestions(dayId).length) {
  state.dailyQuiz ||= {};
  state.dailyQuiz[dayId] ||= { current: 0, answers: {} };
  const entry = state.dailyQuiz[dayId];
  entry.answers ||= {};
  entry.current = Number.isInteger(entry.current) ? entry.current : 0;
  entry.current = Math.min(Math.max(entry.current, 0), Math.max(totalQuestions - 1, 0));
  return entry;
}

function getDailyQuizStats(dayId) {
  const questions = getDailyQuestions(dayId);
  const entry = getDailyQuizEntry(dayId, questions.length);
  let answered = 0;
  let correct = 0;

  questions.forEach((question, index) => {
    const selected = entry.answers[index];
    if (selected === undefined) return;
    answered += 1;
    if (selected === question.answer) correct += 1;
  });

  return {
    answered,
    correct,
    total: questions.length,
    score: questions.length ? Math.round((correct / questions.length) * 100) : 0
  };
}

function answerDailyQuiz(answerIndex) {
  const day = getSelectedDay();
  const questions = getDailyQuestions(day.id);
  if (!questions.length) return;

  const entry = getDailyQuizEntry(day.id, questions.length);
  entry.answers[entry.current] = answerIndex;
  saveState();
  renderSupportPanel();
}

function moveDailyQuiz(offset) {
  const day = getSelectedDay();
  const questions = getDailyQuestions(day.id);
  if (!questions.length) return;

  const entry = getDailyQuizEntry(day.id, questions.length);
  entry.current = Math.min(Math.max(entry.current + offset, 0), questions.length - 1);
  saveState();
  renderSupportPanel();
}

function resetDailyQuiz(dayId) {
  state.dailyQuiz ||= {};
  delete state.dailyQuiz[dayId];
  saveState();
  renderSupportPanel();
}

function renderAssets() {
  const grid = $("#assetGrid");
  grid.innerHTML = assetLibrary.map(([title, path, caption]) => `
    <article>
      <img src="${path}" alt="${title}">
      <div>
        <strong>${title}</strong>
        <span>${caption}</span>
      </div>
    </article>
  `).join("");
}

function renderExam() {
  updateExamMetrics();
  const panel = $("#examPanel");

  if (examState.submitted) {
    panel.innerHTML = renderExamResult();
    renderIcons();
    return;
  }

  if (examState.confirming) {
    panel.innerHTML = renderSubmitConfirmation();
    renderIcons();
    return;
  }

  if (!examState.started) {
    panel.innerHTML = `
      <section class="exam-start">
        <div class="exam-start-layout">
          <div>
            <p class="eyebrow">Instructions</p>
            <h2>Full Takeed mock exam</h2>
          <ul class="instruction-list">
              <li><i>1</i><span>Signed in as ${escapeHtml(state.user?.name || "candidate")} for ${escapeHtml(state.user?.cohort || "this cohort")}.</span></li>
              <li><i>2</i><span>Answer all 100 questions in one sitting. The clock is set to 120 minutes.</span></li>
              <li><i>3</i><span>Use flagging for hard questions and return through the review grid before submitting.</span></li>
              <li><i>4</i><span>Passing score is 70%. There is no penalty for a wrong answer, so leave nothing blank.</span></li>
              <li><i>5</i><span>Questions use scenario judgement across ISO 9001 clauses, ISO 19011 audit practice, and certification readiness.</span></li>
            </ul>
            <div class="button-row">
              <button class="primary-button" type="button" id="startExam"><i data-lucide="play"></i><span>Start Exam</span></button>
              <button class="ghost-button" type="button" id="resetExam"><i data-lucide="rotate-ccw"></i><span>Reset</span></button>
            </div>
          </div>
          <img src="assets/reference/exam-at-glance.svg" alt="Takeed examination at a glance">
        </div>
      </section>
    `;
    renderIcons();
    return;
  }

  if (examState.review) {
    panel.innerHTML = renderReviewScreen();
    renderIcons();
    return;
  }

  const question = questionBank[examState.current];
  const selected = examState.answers[examState.current];
  panel.innerHTML = `
    <section class="exam-shell">
      ${renderExamToolbar(question)}
      <div class="exam-body">
        <div class="question-area">
          <div class="question-meta">
            <span>Question ${question.id} of ${questionBank.length}</span>
            <span>${question.domain}</span>
            <span>${question.clause}</span>
            <span>${question.type}</span>
          </div>
          <p class="question-text">${question.prompt}</p>
          <div class="answer-list">
            ${question.options.map((option, index) => `
              <button class="answer-option ${selected === index ? "is-selected" : ""}" type="button" data-answer="${index}">
                <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
                <span>${option}</span>
              </button>
            `).join("")}
          </div>
          <div class="exam-footer">
            <div class="button-row">
              <button class="exam-nav-button" type="button" id="prevQuestion"><i data-lucide="chevron-left"></i><span>Previous</span></button>
              <button class="exam-nav-button" type="button" id="nextQuestion"><span>Next</span><i data-lucide="chevron-right"></i></button>
            </div>
            <div class="button-row">
              <button class="ghost-button" type="button" id="flagQuestion"><i data-lucide="flag"></i><span>${examState.flags[examState.current] ? "Unflag" : "Flag"}</span></button>
              <button class="secondary-button" type="button" id="showReview"><i data-lucide="layout-grid"></i><span>Review</span></button>
              <button class="primary-button" type="button" id="submitExam"><i data-lucide="send"></i><span>Submit</span></button>
            </div>
          </div>
        </div>
        <aside class="exam-side">
          <h3>Question Map</h3>
          <div class="jump-grid">${renderJumpButtons()}</div>
        </aside>
      </div>
    </section>
  `;
  renderIcons();
}

function renderExamToolbar(question) {
  return `
    <header class="exam-toolbar">
      <div>
        <p class="eyebrow">Takeed examination platform</p>
        <h2>${question.domain} | ${question.clause}</h2>
      </div>
      <div class="exam-status">
        <span>${answeredCount()} answered</span>
        <span>${flaggedCount()} flagged</span>
        <span id="inlineTimer">${formatTime(getRemainingSeconds())}</span>
      </div>
    </header>
  `;
}

function renderJumpButtons() {
  return questionBank.map((question, index) => `
    <button class="question-jump ${questionButtonClass(index)}" type="button" data-jump="${index}" aria-label="Question ${question.id}">
      ${question.id}
    </button>
  `).join("");
}

function renderReviewScreen() {
  return `
    <section class="exam-shell">
      <header class="exam-toolbar">
        <div>
          <p class="eyebrow">Review screen</p>
          <h2>Answered, flagged, and unanswered questions</h2>
        </div>
        <div class="exam-status">
          <span>${answeredCount()} answered</span>
          <span>${flaggedCount()} flagged</span>
          <span>${questionBank.length - answeredCount()} unanswered</span>
          <span id="inlineTimer">${formatTime(getRemainingSeconds())}</span>
        </div>
      </header>
      <div class="review-panel">
        <div class="tag-row">
          <span class="tag is-green">Green: answered</span>
          <span class="tag">Navy: current</span>
          <span class="tag is-maroon">Red: unanswered</span>
          <span class="tag">Amber: flagged</span>
        </div>
        <div class="review-grid">${renderJumpButtons()}</div>
        <div class="exam-footer">
          <button class="secondary-button" type="button" id="backToQuestion"><i data-lucide="arrow-left"></i><span>Back to Question</span></button>
          <button class="primary-button" type="button" id="submitExam"><i data-lucide="send"></i><span>Submit Exam</span></button>
        </div>
      </div>
    </section>
  `;
}

function renderExamResult() {
  const result = scoreExam();
  const passed = result.score >= 70;
  const missed = getMissedQuestions();
  const missedReview = missed.slice(0, 12).map(({ question, selected }) => `
    <article class="review-answer">
      <strong>Q${question.id}. ${escapeHtml(question.prompt)}</strong>
      <span>Your answer: ${selected === undefined ? "Blank" : escapeHtml(question.options[selected])}</span>
      <span>Correct answer: ${escapeHtml(question.options[question.answer])}</span>
      <p>${escapeHtml(question.rationale)}</p>
    </article>
  `).join("");
  const domainCards = domainWeights.map(([code, title]) => {
    const item = result.domains[code] || { correct: 0, total: 0 };
    const percent = item.total ? Math.round((item.correct / item.total) * 100) : 0;
    return `
      <article class="breakdown-card">
        <strong>${code} - ${title}</strong>
        <span>${item.correct}/${item.total} correct | ${percent}%</span>
        <div class="mini-bar" aria-hidden="true"><i style="width:${percent}%"></i></div>
      </article>
    `;
  }).join("");

  return `
    <section class="exam-result">
      <div class="result-band">
        <div class="result-score">
          <div>
            <strong>${result.score}%</strong>
            <span>${result.correct}/100</span>
          </div>
        </div>
        <div>
          <p class="eyebrow">Provisional result</p>
          <h2>${passed ? "Pass readiness achieved" : "Below the 70% readiness line"}</h2>
          <p>${passed ? "Good result. Use the domain breakdown to polish weaker areas before the live sitting." : "Treat this as a diagnostic run. Rework every missed question, then repeat the mock after focused revision."}</p>
          <div class="button-row">
            <button class="secondary-button" type="button" id="resetExam"><i data-lucide="rotate-ccw"></i><span>New Attempt</span></button>
          </div>
        </div>
      </div>
      <div class="breakdown-grid">${domainCards}</div>
      <section class="quality-panel">
        <header>
          <div>
            <p class="eyebrow">Quality review</p>
            <h3>${missed.length ? `Review ${Math.min(missed.length, 12)} of ${missed.length} missed or blank questions` : "No missed questions"}</h3>
          </div>
          <span class="tag">${flaggedCount()} flagged</span>
        </header>
        <div class="missed-review">
          ${missed.length ? missedReview : `<article class="review-answer"><strong>Excellent control of the mock paper.</strong><span>Keep the same pacing discipline on the live exam: read the ask, choose the best answer, and leave nothing blank.</span></article>`}
        </div>
      </section>
    </section>
  `;
}

function renderSubmitConfirmation() {
  const unanswered = questionBank.length - answeredCount();
  return `
    <section class="exam-start">
      <div class="exam-start-layout">
        <div>
          <p class="eyebrow">Submit review</p>
          <h2>Final check before scoring</h2>
          <ul class="instruction-list">
            <li><i>1</i><span>${answeredCount()} questions answered.</span></li>
            <li><i>2</i><span>${flaggedCount()} questions flagged for review.</span></li>
            <li><i>3</i><span>${unanswered} questions unanswered. A blank answer scores zero.</span></li>
            <li><i>4</i><span>Submission is final for this mock attempt and the provisional score appears immediately.</span></li>
          </ul>
          <div class="button-row">
            <button class="primary-button" type="button" id="confirmSubmit"><i data-lucide="send"></i><span>Confirm Submit</span></button>
            <button class="secondary-button" type="button" id="cancelSubmit"><i data-lucide="arrow-left"></i><span>Return to Review</span></button>
          </div>
        </div>
        <img src="assets/reference/exam-at-glance.svg" alt="Takeed examination at a glance">
      </div>
    </section>
  `;
}

function startExam() {
  clearInterval(examInterval);
  Object.assign(examState, {
    started: true,
    submitted: false,
    confirming: false,
    review: false,
    current: 0,
    answers: {},
    flags: {},
    startedAt: Date.now(),
    remainingSeconds: examState.durationSeconds
  });
  examInterval = setInterval(tickExam, 1000);
  renderExam();
}

function resetExam() {
  clearInterval(examInterval);
  Object.assign(examState, {
    started: false,
    submitted: false,
    confirming: false,
    review: false,
    current: 0,
    answers: {},
    flags: {},
    startedAt: null,
    remainingSeconds: examState.durationSeconds
  });
  renderExam();
}

function tickExam() {
  examState.remainingSeconds = getRemainingSeconds();
  updateExamMetrics();
  const inlineTimer = $("#inlineTimer");
  if (inlineTimer) inlineTimer.textContent = formatTime(examState.remainingSeconds);
  if (examState.remainingSeconds <= 0) {
    submitExam(true);
  }
}

function getRemainingSeconds() {
  if (!examState.started || !examState.startedAt) return examState.durationSeconds;
  const elapsed = Math.floor((Date.now() - examState.startedAt) / 1000);
  return Math.max(0, examState.durationSeconds - elapsed);
}

function answerCurrent(index) {
  examState.answers[examState.current] = index;
  if (examState.current < questionBank.length - 1) {
    examState.current += 1;
  }
  renderExam();
}

function submitExam(forced = false) {
  if (!forced) {
    examState.confirming = true;
    renderExam();
    return;
  }
  finishExam();
}

function finishExam() {
  clearInterval(examInterval);
  examState.submitted = true;
  examState.started = false;
  examState.confirming = false;
  examState.review = false;
  renderExam();
}

function scoreExam() {
  const domains = {};
  let correct = 0;

  questionBank.forEach((question, index) => {
    domains[question.domain] ||= { correct: 0, total: 0 };
    domains[question.domain].total += 1;
    if (examState.answers[index] === question.answer) {
      correct += 1;
      domains[question.domain].correct += 1;
    }
  });

  return { correct, score: Math.round((correct / questionBank.length) * 100), domains };
}

function getMissedQuestions() {
  return questionBank
    .map((question, index) => ({ question, selected: examState.answers[index] }))
    .filter(({ question, selected }) => selected !== question.answer);
}

function questionButtonClass(index) {
  const classes = [];
  if (index === examState.current) classes.push("is-current");
  if (examState.answers[index] !== undefined) classes.push("is-answered");
  if (examState.flags[index]) classes.push("is-flagged");
  if (examState.answers[index] === undefined) classes.push("is-unanswered");
  return classes.join(" ");
}

function answeredCount() {
  return Object.keys(examState.answers).length;
}

function flaggedCount() {
  return Object.values(examState.flags).filter(Boolean).length;
}

function updateExamMetrics() {
  const answered = $("#examAnsweredMetric");
  const flagged = $("#examFlaggedMetric");
  const timer = $("#examTimerMetric");
  if (answered) answered.textContent = answeredCount();
  if (flagged) flagged.textContent = flaggedCount();
  if (timer) timer.textContent = formatTime(getRemainingSeconds());
}

function toggleTask(index) {
  const day = getSelectedDay();
  const key = taskKey(day.id, index);
  state.done[key] = !state.done[key];
  saveState();
  renderRoutine();
  renderDayList();
  updateOverallProgress();
}

function getSelectedDay() {
  return days.find((day) => day.id === state.selectedDay) || days[0];
}

function taskKey(dayId, taskIndex) {
  return `day-${dayId}-task-${taskIndex}`;
}

function getDayPercent(dayId) {
  const day = days.find((item) => item.id === dayId);
  const done = day.tasks.filter((_, index) => state.done[taskKey(day.id, index)]).length;
  return Math.round((done / day.tasks.length) * 100);
}

function updateOverallProgress() {
  const total = days.reduce((sum, day) => sum + day.tasks.length, 0);
  const done = days.reduce((sum, day) => {
    return sum + day.tasks.filter((_, index) => state.done[taskKey(day.id, index)]).length;
  }, 0);
  const percent = Math.round((done / total) * 100);
  $("#overallPercent").textContent = `${percent}%`;
  $("#overallBar").style.width = `${percent}%`;
}

function resetProgress() {
  if (!confirm("Reset routine progress, notes, sprint, and exam attempt?")) return;
  clearInterval(sprintInterval);
  clearInterval(examInterval);
  state = {
    ...state,
    selectedDay: 1,
    activeView: "routine",
    done: {},
    notes: {},
    dailyQuiz: {},
    sprintSeconds: 0
  };
  saveState();
  resetExam();
  renderAll();
}

function startSprint(minutes) {
  clearInterval(sprintInterval);
  state.sprintSeconds = minutes * 60;
  saveState();
  renderSupportPanel();
  sprintInterval = setInterval(() => {
    state.sprintSeconds = Math.max(0, state.sprintSeconds - 1);
    const node = $("#sprintTime");
    if (node) node.textContent = formatTime(state.sprintSeconds);
    if (state.sprintSeconds <= 0) {
      clearInterval(sprintInterval);
    }
    saveState();
  }, 1000);
}

function stopSprint() {
  clearInterval(sprintInterval);
  sprintInterval = null;
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function iconSvg(name) {
  if (name === "check") {
    return '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  return "";
}

document.addEventListener("DOMContentLoaded", init);
