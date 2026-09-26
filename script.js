const steps = [
  {
    title: '1. Demand accountability',
    summary:
      'Nigeria deserves leaders who are accountable to the people, not to personal interests or political patronage.',
    points: [
      'Every public promise should be measured by real results.',
      'Public office must prioritize service over privilege.',
      'Transparent governance is essential for national trust and progress.'
    ]
  },
  {
    title: '2. Fix the economy and cost of living',
    summary:
      'Families are struggling under inflation, food insecurity, fuel pressure, and weak purchasing power.',
    points: [
      'The next government must protect citizens from runaway costs.',
      'Job creation and youth empowerment must be central to policy.',
      'A stable economy should reduce hardship for households and businesses.'
    ]
  },
  {
    title: '3. Restore trust in leadership',
    summary:
      'When citizens lose faith in public institutions, development slows and despair grows.',
    points: [
      'Trust grows when leaders listen and respond honestly.',
      'Inclusive leadership is stronger than empty rhetoric.',
      'A democratic Nigeria needs integrity, humility, and competence.'
    ]
  },
  {
    title: '4. Improve security and justice',
    summary:
      'Security is not only about policing; it is about protecting lives, property, and dignity across every region.',
    points: [
      'The rule of law must protect all Nigerians fairly.',
      'Justice should be timely, transparent, and accessible.',
      'Communities need confidence that they are safe and protected.'
    ]
  },
  {
    title: '5. Invest in education and health',
    summary:
      'A nation rises when its children are educated and its people have access to affordable healthcare.',
    points: [
      'Education must create skills, opportunities, and dignity.',
      'Healthcare must be reliable, affordable, and community-centered.',
      'Healthy citizens and strong schools build a stronger Nigeria.'
    ]
  },
  {
    title: '6. Fight corruption and public waste',
    summary:
      'Corruption drains resources that should build roads, schools, hospitals, and livelihoods for ordinary Nigerians.',
    points: [
      'Public funds must be used for the common good.',
      'Open procurement and accountability will reduce leakages.',
      'Nigeria needs a system that rewards fairness, not favoritism.'
    ]
  },
  {
    title: '7. Vote for renewal and national progress',
    summary:
      'The 2027 election is the moment for Nigerians to choose competence, accountability, and a better future.',
    points: [
      'Change begins when citizens rise and vote with purpose.',
      'National progress requires unity, courage, and active participation.',
      'A new direction is possible when the people demand it.'
    ]
  }
];

const stepCard = document.getElementById('stepCard');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const progressFill = document.getElementById('progressFill');
const progressLabel = document.getElementById('progressLabel');

let currentStep = 0;

function renderStep() {
  const step = steps[currentStep];
  stepCard.innerHTML = `
    <div class="step-number">${currentStep + 1}</div>
    <h2>${step.title}</h2>
    <p>${step.summary}</p>
    <ul>
      ${step.points.map((point) => `<li>${point}</li>`).join('')}
    </ul>
  `;

  const progress = ((currentStep + 1) / steps.length) * 100;
  progressFill.style.width = `${progress}%`;
  progressLabel.textContent = `${currentStep + 1} of ${steps.length}`;

  prevBtn.disabled = currentStep === 0;
  prevBtn.style.opacity = currentStep === 0 ? '0.45' : '1';

  nextBtn.textContent = currentStep === steps.length - 1 ? 'Restart' : 'Next Step';
}

nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep += 1;
  } else {
    currentStep = 0;
  }
  renderStep();
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep -= 1;
    renderStep();
  }
});

renderStep();
