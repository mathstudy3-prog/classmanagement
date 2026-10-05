/* =========================================================
   ClassEconomy - Main JavaScript Application (State & UI Logic)
   ========================================================= */

// ---------------------------------------------------------
// 1. Initial State & Dummy Data ( 초등 6학년 25명 기준 )
// ---------------------------------------------------------

const DEFAULT_STUDENTS = [
  { id: 'stu-1', number: 1, name: '강민준', gender: 'M', balance: 350, level: 2, exp: 140, roleId: 'role-1', taskDoneToday: false, coupons: [] },
  { id: 'stu-2', number: 2, name: '김도윤', gender: 'M', balance: 280, level: 2, exp: 110, roleId: 'role-2', taskDoneToday: false, coupons: [] },
  { id: 'stu-3', number: 3, name: '김서아', gender: 'F', balance: 520, level: 3, exp: 280, roleId: 'role-3', taskDoneToday: false, coupons: [] },
  { id: 'stu-4', number: 4, name: '김아린', gender: 'F', balance: 410, level: 2, exp: 190, roleId: 'role-4', taskDoneToday: false, coupons: [] },
  { id: 'stu-5', number: 5, name: '김주원', gender: 'M', balance: 190, level: 1, exp: 80,  roleId: 'role-5', taskDoneToday: false, coupons: [] },
  { id: 'stu-6', number: 6, name: '남하준', gender: 'M', balance: 300, level: 2, exp: 150, roleId: 'role-6', taskDoneToday: false, coupons: [] },
  { id: 'stu-7', number: 7, name: '노지유', gender: 'F', balance: 460, level: 3, exp: 260, roleId: 'role-7', taskDoneToday: false, coupons: [] },
  { id: 'stu-8', number: 8, name: '박건우', gender: 'M', balance: 150, level: 1, exp: 60,  roleId: 'role-8', taskDoneToday: false, coupons: [] },
  { id: 'stu-9', number: 9, name: '박서준', gender: 'M', balance: 600, level: 3, exp: 310, roleId: 'role-9', taskDoneToday: false, coupons: [] },
  { id: 'stu-10', number: 10, name: '박시은', gender: 'F', balance: 240, level: 2, exp: 120, roleId: 'role-10', taskDoneToday: false, coupons: [] },
  { id: 'stu-11', number: 11, name: '서우진', gender: 'M', balance: 380, level: 2, exp: 170, roleId: 'role-1', taskDoneToday: false, coupons: [] },
  { id: 'stu-12', number: 12, name: '손하은', gender: 'F', balance: 490, level: 3, exp: 290, roleId: 'role-2', taskDoneToday: false, coupons: [] },
  { id: 'stu-13', number: 13, name: '신유나', gender: 'F', balance: 330, level: 2, exp: 160, roleId: 'role-3', taskDoneToday: false, coupons: [] },
  { id: 'stu-14', number: 14, name: '안현우', gender: 'M', balance: 270, level: 2, exp: 100, roleId: 'role-4', taskDoneToday: false, coupons: [] },
  { id: 'stu-15', number: 15, name: '양지호', gender: 'M', balance: 500, level: 3, exp: 300, roleId: 'role-5', taskDoneToday: false, coupons: [] },
  { id: 'stu-16', number: 16, name: '윤서연', gender: 'F', balance: 430, level: 2, exp: 210, roleId: 'role-6', taskDoneToday: false, coupons: [] },
  { id: 'stu-17', number: 17, name: '이준우', gender: 'M', balance: 310, level: 2, exp: 130, roleId: 'role-7', taskDoneToday: false, coupons: [] },
  { id: 'stu-18', number: 18, name: '이하윤', gender: 'F', balance: 580, level: 3, exp: 340, roleId: 'role-8', taskDoneToday: false, coupons: [] },
  { id: 'stu-19', number: 19, name: '임도현', gender: 'M', balance: 220, level: 1, exp: 95,  roleId: 'role-9', taskDoneToday: false, coupons: [] },
  { id: 'stu-20', number: 20, name: '장채원', gender: 'F', balance: 390, level: 2, exp: 180, roleId: 'role-10', taskDoneToday: false, coupons: [] },
  { id: 'stu-21', number: 21, name: '정지안', gender: 'F', balance: 340, level: 2, exp: 155, roleId: 'role-1', taskDoneToday: false, coupons: [] },
  { id: 'stu-22', number: 22, name: '조은우', gender: 'M', balance: 290, level: 2, exp: 125, roleId: 'role-2', taskDoneToday: false, coupons: [] },
  { id: 'stu-23', number: 23, name: '최수아', gender: 'F', balance: 470, level: 3, exp: 275, roleId: 'role-3', taskDoneToday: false, coupons: [] },
  { id: 'stu-24', number: 24, name: '한지민', gender: 'F', balance: 360, level: 2, exp: 165, roleId: 'role-4', taskDoneToday: false, coupons: [] },
  { id: 'stu-25', number: 25, name: '황유준', gender: 'M', balance: 400, level: 2, exp: 195, roleId: 'role-5', taskDoneToday: false, coupons: [] }
];

const DEFAULT_ROLES = [
  { id: 'role-1', title: '칠판 도우미', icon: '🧹', rewardMoney: 30, rewardExp: 20, description: '매 교시 쉬는 시간마다 칠판을 깨끗이 지우고 분필/지우개를 정돈합니다.' },
  { id: 'role-2', title: '우유 & 급식 도우미', icon: '🥛', rewardMoney: 40, rewardExp: 25, description: '아침 우유 배식 및 점심시간 급식 줄 정리를 담당합니다.' },
  { id: 'role-3', title: '미디어 & 조명 관리자', icon: '🖥️', rewardMoney: 30, rewardExp: 20, description: '수업용 TV/프로젝터 전원을 켜고 끄며 교실 조명을 조절합니다.' },
  { id: 'role-4', title: '알림장 & 제출물 반장', icon: '📝', rewardMoney: 35, rewardExp: 25, description: '매일 칠판 알림장을 확인하고 숙제 및 제출물을 거둡니다.' },
  { id: 'role-5', title: '에어컨 & 환기 도우미', icon: '❄️', rewardMoney: 30, rewardExp: 20, description: '교실 온도 및 환기 시각을 체크하여 창문을 열고 닫습니다.' },
  { id: 'role-6', title: '분리수거 반장', icon: '♻️', rewardMoney: 45, rewardExp: 30, description: '재활용품 분리수거함을 청결하게 유지하고 분리배출을 안내합니다.' },
  { id: 'role-7', title: '도서 관리자', icon: '📚', rewardMoney: 35, rewardExp: 25, description: '학급 문고 책장 정리정돈 및 대여 대장을 관리합니다.' },
  { id: 'role-8', title: '질서 & 이동 반장', icon: '🚶‍♂️', rewardMoney: 30, rewardExp: 20, description: '전담실 이동 시 학급 줄을 세우고 이동 질서를 유지합니다.' },
  { id: 'role-9', title: '학습 도우미', icon: '💡', rewardMoney: 40, rewardExp: 30, description: '모둠 활동 시 친구들의 질문을 돕고 유인물을 나누어 줍니다.' },
  { id: 'role-10', title: '환경 정리 반장', icon: '🌱', rewardMoney: 35, rewardExp: 25, description: '교실 뒤편 게시판 정돈 및 화분 물주기를 담당합니다.' }
];

const DEFAULT_SHOP_ITEMS = [
  { id: 'item-1', title: '원하는 자리 지정권', type: 'coupon', price: 200, stock: -1, icon: '🪑', description: '다음 자리 배치 시 원하는 자리를 우선 선택할 수 있는 쿠폰입니다.' },
  { id: 'item-2', title: '숙제 1회 면제권', type: 'coupon', price: 300, stock: 5, icon: '📝', description: '일일 일기/독서록 숙제 중 1회를 면제받는 꿀쿠폰!' },
  { id: 'item-3', title: '자율시간 10분 쿠폰', type: 'coupon', price: 150, stock: -1, icon: '⏰', description: '쉬는 시간 10분을 연장하거나 자율 활동을 즐길 수 있습니다.' },
  { id: 'item-4', title: '하루 급식 1등 찬스', type: 'coupon', price: 100, stock: -1, icon: '👑', description: '오늘 점심시간에 가장 먼저 급식을 줄 서서 먹는 특별 권한!' },
  { id: 'item-5', title: '학급 BGM DJ 권한', type: 'coupon', price: 120, stock: -1, icon: '🎵', description: '아침 자율 학습 시간이나 청소 시간에 들을 음악 2곡을 신청합니다.' },
  { id: 'item-6', title: '고급 캐릭터 젤펜', type: 'item', price: 80, stock: 10, icon: '✏️', description: '귀여운 캐릭터가 달린 필기감 좋은 부드러운 젤펜입니다.' },
  { id: 'item-7', title: '달콤 간식 세트', type: 'item', price: 50, stock: 15, icon: '🍬', description: '젤리와 초콜릿이 담긴 달콤한 쉬는 시간 간식 세트.' }
];

// App State (LocalStorage 백업)
let state = {
  mode: 'teacher', // 'teacher' | 'student'
  currentStudentId: 'stu-1',
  selectedStudentIds: [],
  students: JSON.parse(localStorage.getItem('CE_STUDENTS')) || DEFAULT_STUDENTS,
  roles: JSON.parse(localStorage.getItem('CE_ROLES')) || DEFAULT_ROLES,
  shopItems: JSON.parse(localStorage.getItem('CE_SHOP_ITEMS')) || DEFAULT_SHOP_ITEMS,
  pendingOrders: JSON.parse(localStorage.getItem('CE_PENDING_ORDERS')) || [],
  history: JSON.parse(localStorage.getItem('CE_HISTORY')) || []
};

// ---------------------------------------------------------
// 2. LocalStorage & Utility Functions
// ---------------------------------------------------------

function saveState() {
  localStorage.setItem('CE_STUDENTS', JSON.stringify(state.students));
  localStorage.setItem('CE_ROLES', JSON.stringify(state.roles));
  localStorage.setItem('CE_SHOP_ITEMS', JSON.stringify(state.shopItems));
  localStorage.setItem('CE_PENDING_ORDERS', JSON.stringify(state.pendingOrders));
  localStorage.setItem('CE_HISTORY', JSON.stringify(state.history));
}

function confirmResetData() {
  if (confirm('모든 학급 데이터(학생 잔액, 레벨, 상점, 내역)를 초기 상태로 리셋하시겠습니까?')) {
    localStorage.clear();
    state.students = DEFAULT_STUDENTS;
    state.roles = DEFAULT_ROLES;
    state.shopItems = DEFAULT_SHOP_ITEMS;
    state.pendingOrders = [];
    state.history = [];
    saveState();
    initApp();
    showToast('데이터가 초기 설정으로 성공적으로 리셋되었습니다.', 'success');
  }
}

// EXP & Level Calculation Formula
function calculateLevelInfo(exp) {
  // Level threshold curve:
  // Lv 1: 0~99 (Req 100)
  // Lv 2: 100~249 (Req 150)
  // Lv 3: 250~449 (Req 200)
  // Lv 4: 450~699 (Req 250)
  // Lv 5: 700~999 (Req 300)
  // Lv 6+: 1000+
  if (exp < 100) return { level: 1, curExp: exp, maxExp: 100, pct: Math.floor((exp / 100) * 100) };
  if (exp < 250) return { level: 2, curExp: exp - 100, maxExp: 150, pct: Math.floor(((exp - 100) / 150) * 100) };
  if (exp < 450) return { level: 3, curExp: exp - 250, maxExp: 200, pct: Math.floor(((exp - 250) / 200) * 100) };
  if (exp < 700) return { level: 4, curExp: exp - 450, maxExp: 250, pct: Math.floor(((exp - 450) / 250) * 100) };
  if (exp < 1000) return { level: 5, curExp: exp - 700, maxExp: 300, pct: Math.floor(((exp - 700) / 300) * 100) };
  
  const lvl = 5 + Math.floor((exp - 1000) / 350);
  const remExp = (exp - 1000) % 350;
  return { level: lvl, curExp: remExp, maxExp: 350, pct: Math.floor((remExp / 350) * 100) };
}

function fireConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = 'fa-circle-info';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'error') icon = 'fa-triangle-exclamation';

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Modal Helpers
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('hidden');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
}

// ---------------------------------------------------------
// 3. Main Init & View Switcher
// ---------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  populateStudentSelectOptions();
  switchMode(state.mode);
  renderTeacherDashboard();
  renderStudentDashboard();
  renderShopAdmin();
  renderRolesAdmin();
  renderGlobalHistory();
}

function populateStudentSelectOptions() {
  const select = document.getElementById('student-select');
  select.innerHTML = '';
  state.students.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = `${s.number}번 ${s.name}`;
    if (s.id === state.currentStudentId) opt.selected = true;
    select.appendChild(opt);
  });
}

function switchMode(mode) {
  state.mode = mode;
  const btnTeacher = document.getElementById('btn-mode-teacher');
  const btnStudent = document.getElementById('btn-mode-student');
  const teacherView = document.getElementById('teacher-view');
  const studentView = document.getElementById('student-view');
  const studentSelectBox = document.getElementById('student-selector-container');

  if (mode === 'teacher') {
    btnTeacher.classList.add('active');
    btnStudent.classList.remove('active');
    teacherView.classList.add('active');
    studentView.classList.remove('active');
    studentSelectBox.classList.add('hidden');
    renderTeacherDashboard();
  } else {
    btnStudent.classList.add('active');
    btnTeacher.classList.remove('active');
    studentView.classList.add('active');
    teacherView.classList.remove('active');
    studentSelectBox.classList.remove('hidden');
    renderStudentDashboard();
  }
}

function changeCurrentStudent(id) {
  state.currentStudentId = id;
  renderStudentDashboard();
}

// ---------------------------------------------------------
// 4. Teacher View Handlers & Renderers
// ---------------------------------------------------------

function switchTeacherTab(tabName) {
  const tabs = document.querySelectorAll('.teacher-tab-content');
  const btns = document.querySelectorAll('.nav-tabs .tab-btn');
  tabs.forEach(t => t.classList.remove('active'));
  btns.forEach(b => b.classList.remove('active'));

  document.getElementById(`teacher-tab-${tabName}`).classList.add('active');
  event.currentTarget.classList.add('active');
}

function renderTeacherDashboard() {
  // Update Teacher Summary Cards
  const totalCurr = state.students.reduce((sum, s) => sum + s.balance, 0);
  const avgLevel = (state.students.reduce((sum, s) => sum + s.level, 0) / state.students.length).toFixed(1);
  const assignedRoles = state.students.filter(s => s.roleId).length;

  document.getElementById('total-currency-display').textContent = `${totalCurr.toLocaleString()} 미소`;
  document.getElementById('avg-level-display').textContent = `Lv. ${avgLevel}`;
  document.getElementById('role-assigned-count').textContent = `${assignedRoles} / ${state.students.length}명`;
  document.getElementById('pending-orders-count').textContent = `${state.pendingOrders.length}건`;

  const badgePending = document.getElementById('badge-pending');
  if (state.pendingOrders.length > 0) {
    badgePending.textContent = state.pendingOrders.length;
    badgePending.classList.remove('hidden');
  } else {
    badgePending.classList.add('hidden');
  }

  // Filter & Sort Students
  const searchQuery = document.getElementById('student-search-input').value.trim().toLowerCase();
  const sortOption = document.getElementById('student-sort-select').value;

  let filtered = state.students.filter(s => {
    const role = state.roles.find(r => r.id === s.roleId);
    const roleTitle = role ? role.title : '';
    return s.name.toLowerCase().includes(searchQuery) || roleTitle.toLowerCase().includes(searchQuery) || `${s.number}`.includes(searchQuery);
  });

  filtered.sort((a, b) => {
    if (sortOption === 'number') return a.number - b.number;
    if (sortOption === 'name') return a.name.localeCompare(b.name, 'ko');
    if (sortOption === 'balance-desc') return b.balance - a.balance;
    if (sortOption === 'balance-asc') return a.balance - b.balance;
    if (sortOption === 'level-desc') return b.level - a.level || b.exp - a.exp;
    return 0;
  });

  // Render Grid Cards
  const grid = document.getElementById('student-grid');
  grid.innerHTML = '';

  filtered.forEach(s => {
    const role = state.roles.find(r => r.id === s.roleId);
    const lvlInfo = calculateLevelInfo(s.exp);
    const isSelected = state.selectedStudentIds.includes(s.id);

    const card = document.createElement('div');
    card.className = `student-card ${isSelected ? 'selected' : ''}`;
    card.innerHTML = `
      <input type="checkbox" class="card-select-checkbox" ${isSelected ? 'checked' : ''} onchange="toggleSelectStudent('${s.id}')">
      <div class="stu-card-top">
        <div class="stu-avatar">${s.gender === 'M' ? '👦' : '👧'}</div>
        <div class="stu-info">
          <h4>${s.name} <span class="level-chip">Lv.${lvlInfo.level}</span></h4>
          <span class="stu-num">${s.number}번 학생</span>
        </div>
      </div>
      <div class="stu-stats">
        <div class="stat-row">
          <span>화폐 잔액</span>
          <span class="currency-text"><i class="fa-solid fa-coins"></i> ${s.balance.toLocaleString()} 미소</span>
        </div>
        <div class="stat-row">
          <span>경험치</span>
          <span>${s.exp} EXP</span>
        </div>
      </div>
      <div class="stu-role-tag">
        <i class="fa-solid fa-briefcase"></i> 역할: <strong>${role ? role.title : '미배정'}</strong>
      </div>
      <div class="stu-card-actions">
        <button class="btn btn-sm btn-primary btn-block" onclick="openSingleTransactionModal('${s.id}', 'plus')">
          <i class="fa-solid fa-plus"></i> 지급
        </button>
        <button class="btn btn-sm btn-outline btn-block" onclick="openSingleTransactionModal('${s.id}', 'minus')">
          <i class="fa-solid fa-minus"></i> 차감
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function toggleSelectStudent(id) {
  if (state.selectedStudentIds.includes(id)) {
    state.selectedStudentIds = state.selectedStudentIds.filter(i => i !== id);
  } else {
    state.selectedStudentIds.push(id);
  }
  renderTeacherDashboard();
}

function selectAllStudents(select) {
  if (select) {
    state.selectedStudentIds = state.students.map(s => s.id);
  } else {
    state.selectedStudentIds = [];
  }
  renderTeacherDashboard();
}

// ---------------------------------------------------------
// 5. Transaction Handlers (지급/차감)
// ---------------------------------------------------------

function openSingleTransactionModal(studentId, type) {
  state.selectedStudentIds = [studentId];
  openBatchTransactionModal(type);
}

function openBatchTransactionModal(defaultType = 'plus') {
  if (state.selectedStudentIds.length === 0) {
    showToast('화폐를 지급/차감할 학생을 1명 이상 선택해 주세요.', 'error');
    return;
  }

  const targetStudents = state.students.filter(s => state.selectedStudentIds.includes(s.id));
  const namesText = targetStudents.map(s => s.name).join(', ');
  
  document.getElementById('trans-student-ids').value = state.selectedStudentIds.join(',');
  document.getElementById('trans-target-names').textContent = `${namesText} (${targetStudents.length}명)`;
  document.getElementById('trans-type').value = defaultType;
  document.getElementById('trans-amount').value = 50;
  document.getElementById('trans-exp').value = 30;
  document.getElementById('trans-reason').value = '';

  openModal('modal-transaction');
}

function setTransReason(reason, amount, exp) {
  document.getElementById('trans-reason').value = reason;
  if (amount < 0) {
    document.getElementById('trans-type').value = 'minus';
    document.getElementById('trans-amount').value = Math.abs(amount);
    document.getElementById('trans-exp').value = 0;
  } else {
    document.getElementById('trans-type').value = 'plus';
    document.getElementById('trans-amount').value = amount;
    document.getElementById('trans-exp').value = exp;
  }
}

function handleTransactionSubmit(e) {
  e.preventDefault();
  const ids = document.getElementById('trans-student-ids').value.split(',');
  const type = document.getElementById('trans-type').value;
  const amount = parseInt(document.getElementById('trans-amount').value, 10);
  const exp = parseInt(document.getElementById('trans-exp').value, 10);
  const reason = document.getElementById('trans-reason').value.trim();

  const finalAmount = type === 'plus' ? amount : -amount;
  const finalExp = type === 'plus' ? exp : 0;

  let levelUpOccurred = false;

  ids.forEach(id => {
    const student = state.students.find(s => s.id === id);
    if (student) {
      student.balance = Math.max(0, student.balance + finalAmount);
      
      const oldLevelInfo = calculateLevelInfo(student.exp);
      student.exp = Math.max(0, student.exp + finalExp);
      const newLevelInfo = calculateLevelInfo(student.exp);
      student.level = newLevelInfo.level;

      if (newLevelInfo.level > oldLevelInfo.level) {
        levelUpOccurred = true;
      }

      // Add to History
      state.history.unshift({
        id: 'hist-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
        studentId: student.id,
        studentName: student.name,
        type: type,
        amount: finalAmount,
        exp: finalExp,
        reason: reason,
        timestamp: new Date().toLocaleString('ko-KR')
      });
    }
  });

  saveState();
  closeModal('modal-transaction');
  state.selectedStudentIds = [];
  renderTeacherDashboard();
  renderStudentDashboard();
  renderGlobalHistory();

  if (levelUpOccurred) {
    fireConfetti();
    showToast(`🎉 레벨업 축하! 축하 폭죽이 터집니다!`, 'success');
  } else {
    showToast(`${ids.length}명 학생에게 화폐 및 EXP가 적용되었습니다.`, 'success');
  }
}

// ---------------------------------------------------------
// 6. Student View Renderer & Interactions
// ---------------------------------------------------------

function renderStudentDashboard() {
  const student = state.students.find(s => s.id === state.currentStudentId) || state.students[0];
  if (!student) return;

  // Render Hero Profile Card
  document.getElementById('stu-avatar').textContent = student.gender === 'M' ? '👦' : '👧';
  document.getElementById('stu-num-display').textContent = `${student.number}번`;
  document.getElementById('stu-name-display').textContent = student.name;

  const lvlInfo = calculateLevelInfo(student.exp);
  document.getElementById('stu-level-badge').textContent = `Lv. ${lvlInfo.level}`;
  document.getElementById('stu-exp-text').textContent = `${lvlInfo.curExp} / ${lvlInfo.maxExp} EXP`;
  document.getElementById('stu-exp-fill').style.width = `${lvlInfo.pct}%`;
  document.getElementById('stu-balance-display').textContent = student.balance.toLocaleString();

  // Render 1인 1역 & Task Card
  const role = state.roles.find(r => r.id === student.roleId);
  const taskChip = document.getElementById('task-status-chip');
  const taskBtn = document.getElementById('btn-complete-task');

  if (role) {
    document.getElementById('stu-role-icon').textContent = role.icon;
    document.getElementById('stu-role-title').textContent = role.title;
    document.getElementById('stu-role-desc').textContent = role.description;
    document.getElementById('stu-role-reward').textContent = `+${role.rewardMoney} 미소 / +${role.rewardExp} EXP`;
  } else {
    document.getElementById('stu-role-icon').textContent = '❓';
    document.getElementById('stu-role-title').textContent = '배정된 역할 없음';
    document.getElementById('stu-role-desc').textContent = '선생님이 아직 1인 1역 역할을 배정하지 않았습니다.';
    document.getElementById('stu-role-reward').textContent = '보상 없음';
  }

  if (student.taskDoneToday) {
    taskChip.textContent = '오늘 완수 완료!';
    taskChip.className = 'status-chip completed';
    taskBtn.disabled = true;
    taskBtn.className = 'btn btn-outline btn-block btn-lg';
    taskBtn.innerHTML = '<i class="fa-solid fa-check-double"></i> 오늘 보상 수령 완료';
  } else {
    taskChip.textContent = '수행 대기 중';
    taskChip.className = 'status-chip';
    taskBtn.disabled = false;
    taskBtn.className = 'btn btn-success btn-block btn-lg';
    taskBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> 오늘 과업 완료하고 보상 받기';
  }

  // Render My Coupons
  renderStudentCoupons(student);

  // Render Shop for Student
  renderStudentShopGrid(student);
}

function checkTaskItem() {
  // Checkbox logic for checklist
}

function submitRoleTask() {
  const student = state.students.find(s => s.id === state.currentStudentId);
  if (!student || student.taskDoneToday) return;

  const role = state.roles.find(r => r.id === student.roleId);
  if (!role) {
    showToast('배정된 역할이 없어 보상을 받을 수 없습니다.', 'error');
    return;
  }

  student.taskDoneToday = true;
  student.balance += role.rewardMoney;

  const oldLvl = calculateLevelInfo(student.exp).level;
  student.exp += role.rewardExp;
  const newLvl = calculateLevelInfo(student.exp).level;
  student.level = newLvl;

  // History
  state.history.unshift({
    id: 'hist-' + Date.now(),
    studentId: student.id,
    studentName: student.name,
    type: 'plus',
    amount: role.rewardMoney,
    exp: role.rewardExp,
    reason: `1인 1역(${role.title}) 일일 완수 보상`,
    timestamp: new Date().toLocaleString('ko-KR')
  });

  saveState();
  renderStudentDashboard();
  renderGlobalHistory();

  if (newLvl > oldLvl) {
    fireConfetti();
    showToast(`🎉 1인 1역 완수! 축하합니다! 레벨 ${newLvl}로 상승했습니다!`, 'success');
  } else {
    showToast(`🧹 1인 1역 수행 완료! +${role.rewardMoney}미소 & +${role.rewardExp}EXP 수령!`, 'success');
  }
}

function renderStudentCoupons(student) {
  const list = document.getElementById('my-coupons-list');
  const countBadge = document.getElementById('my-coupon-count');
  list.innerHTML = '';

  const coupons = student.coupons || [];
  countBadge.textContent = `${coupons.length}장`;

  if (coupons.length === 0) {
    list.innerHTML = '<p class="sub-text" style="text-align:center; padding: 20px 0;">보유 중인 쿠폰이 없습니다. 상점에서 구매해 보세요!</p>';
    return;
  }

  coupons.forEach(c => {
    const ticket = document.createElement('div');
    ticket.className = 'coupon-ticket';
    ticket.innerHTML = `
      <div class="coupon-info">
        <span class="coupon-icon">${c.icon}</span>
        <div>
          <div class="coupon-name">${c.title}</div>
          <div class="coupon-date">구매일: ${c.purchaseDate}</div>
        </div>
      </div>
      <button class="btn btn-sm btn-secondary" onclick="useCoupon('${c.id}')">사용하기</button>
    `;
    list.appendChild(ticket);
  });
}

function useCoupon(couponId) {
  const student = state.students.find(s => s.id === state.currentStudentId);
  if (!student) return;

  const couponIndex = student.coupons.findIndex(c => c.id === couponId);
  if (couponIndex !== -1) {
    const used = student.coupons.splice(couponIndex, 1)[0];
    saveState();
    renderStudentDashboard();
    showToast(`🎟️ [${used.title}] 쿠폰을 사용하였습니다! 교사에게 제시하세요.`, 'success');
  }
}

function renderStudentShopGrid(student) {
  const grid = document.getElementById('student-shop-grid');
  grid.innerHTML = '';

  state.shopItems.forEach(item => {
    const canAfford = student.balance >= item.price;
    const isOutOfStock = item.stock === 0;

    const card = document.createElement('div');
    card.className = 'shop-item-card';
    card.innerHTML = `
      <div>
        <div class="shop-item-icon">${item.icon}</div>
        <div class="shop-item-title">${item.title}</div>
        <div class="shop-item-desc">${item.description}</div>
      </div>
      <div class="shop-item-footer">
        <div class="shop-item-price"><i class="fa-solid fa-coins"></i> ${item.price}</div>
        <button class="btn btn-sm ${canAfford && !isOutOfStock ? 'btn-primary' : 'btn-outline'}" 
                ${!canAfford || isOutOfStock ? 'disabled' : ''}
                onclick="buyShopItem('${item.id}')">
          ${isOutOfStock ? '품절' : '구매'}
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function buyShopItem(itemId) {
  const student = state.students.find(s => s.id === state.currentStudentId);
  const item = state.shopItems.find(i => i.id === itemId);

  if (!student || !item) return;
  if (student.balance < item.price) {
    showToast('잔액이 부족하여 구매할 수 없습니다.', 'error');
    return;
  }

  // Create pending order for teacher approval
  const newOrder = {
    id: 'ord-' + Date.now(),
    studentId: student.id,
    studentName: student.name,
    itemId: item.id,
    itemTitle: item.title,
    itemIcon: item.icon,
    itemType: item.type,
    price: item.price,
    timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
  };

  state.pendingOrders.push(newOrder);
  saveState();
  renderTeacherDashboard();
  renderShopAdmin();
  showToast(`🛒 [${item.title}] 구매 요청이 등록되었습니다! 교사 승인 후 지급됩니다.`, 'success');
}

// ---------------------------------------------------------
// 7. Shop & Role Admin Renderer
// ---------------------------------------------------------

function renderShopAdmin() {
  // Pending Orders List
  const ordersList = document.getElementById('pending-orders-list');
  ordersList.innerHTML = '';

  if (state.pendingOrders.length === 0) {
    ordersList.innerHTML = '<p class="sub-text" style="padding: 10px 0;">승인 대기 중인 학생 구매 요청이 없습니다.</p>';
  } else {
    state.pendingOrders.forEach(ord => {
      const row = document.createElement('div');
      row.className = 'coupon-ticket';
      row.style.background = '#fff';
      row.style.border = '1px solid var(--border-color)';
      row.style.marginBottom = '8px';
      row.innerHTML = `
        <div class="coupon-info">
          <span class="coupon-icon">${ord.itemIcon}</span>
          <div>
            <div class="coupon-name"><strong>${ord.studentName}</strong> - ${ord.itemTitle} (${ord.price} 미소)</div>
            <div class="coupon-date">신청 시각: ${ord.timestamp}</div>
          </div>
        </div>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-sm btn-success" onclick="approveOrder('${ord.id}')">승인 및 차감</button>
          <button class="btn btn-sm btn-outline" onclick="rejectOrder('${ord.id}')">거절</button>
        </div>
      `;
      ordersList.appendChild(row);
    });
  }

  // Teacher Shop Grid
  const grid = document.getElementById('teacher-shop-grid');
  grid.innerHTML = '';

  state.shopItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'shop-item-card';
    card.innerHTML = `
      <div>
        <div class="shop-item-icon">${item.icon}</div>
        <div class="shop-item-title">${item.title}</div>
        <div class="shop-item-desc">${item.description}</div>
      </div>
      <div class="shop-item-footer">
        <div class="shop-item-price"><i class="fa-solid fa-coins"></i> ${item.price}</div>
        <div style="display:flex; gap:4px;">
          <button class="btn btn-sm btn-outline" onclick="deleteShopItem('${item.id}')"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function approveOrder(orderId) {
  const orderIdx = state.pendingOrders.findIndex(o => o.id === orderId);
  if (orderIdx === -1) return;

  const order = state.pendingOrders[orderIdx];
  const student = state.students.find(s => s.id === order.studentId);

  if (!student) return;

  if (student.balance < order.price) {
    showToast(`${student.name} 학생의 화폐 잔액이 부족합니다.`, 'error');
    return;
  }

  // Deduct balance
  student.balance -= order.price;

  // Add Coupon to student if type is coupon
  if (!student.coupons) student.coupons = [];
  student.coupons.push({
    id: 'coup-' + Date.now(),
    title: order.itemTitle,
    icon: order.itemIcon,
    purchaseDate: new Date().toLocaleDateString('ko-KR')
  });

  // History
  state.history.unshift({
    id: 'hist-' + Date.now(),
    studentId: student.id,
    studentName: student.name,
    type: 'minus',
    amount: -order.price,
    exp: 0,
    reason: `상점 상품 구매 (${order.itemTitle})`,
    timestamp: new Date().toLocaleString('ko-KR')
  });

  state.pendingOrders.splice(orderIdx, 1);
  saveState();
  renderTeacherDashboard();
  renderStudentDashboard();
  renderShopAdmin();
  renderGlobalHistory();
  showToast(`${student.name} 학생의 [${order.itemTitle}] 구매가 승인되었습니다!`, 'success');
}

function rejectOrder(orderId) {
  state.pendingOrders = state.pendingOrders.filter(o => o.id !== orderId);
  saveState();
  renderTeacherDashboard();
  renderShopAdmin();
  showToast('구매 요청이 거절되었습니다.', 'info');
}

function openAddShopItemModal() {
  document.getElementById('form-shop-item').reset();
  openModal('modal-shop-item');
}

function handleShopItemSubmit(e) {
  e.preventDefault();
  const newItem = {
    id: 'item-' + Date.now(),
    title: document.getElementById('shop-item-title').value.trim(),
    type: document.getElementById('shop-item-type').value,
    price: parseInt(document.getElementById('shop-item-price').value, 10),
    stock: parseInt(document.getElementById('shop-item-stock').value, 10),
    icon: document.getElementById('shop-item-icon').value,
    description: document.getElementById('shop-item-desc').value.trim()
  };

  state.shopItems.push(newItem);
  saveState();
  closeModal('modal-shop-item');
  renderShopAdmin();
  renderStudentDashboard();
  showToast('새 상점 상품이 성공적으로 등록되었습니다!', 'success');
}

function deleteShopItem(id) {
  if (confirm('이 상품을 상점에서 삭제하시겠습니까?')) {
    state.shopItems = state.shopItems.filter(i => i.id !== id);
    saveState();
    renderShopAdmin();
    renderStudentDashboard();
    showToast('상품이 삭제되었습니다.', 'info');
  }
}

// ---------------------------------------------------------
// 8. 1인 1역 Management
// ---------------------------------------------------------

function renderRolesAdmin() {
  const grid = document.getElementById('roles-grid');
  grid.innerHTML = '';

  state.roles.forEach(role => {
    const assignedStudents = state.students.filter(s => s.roleId === role.id);
    const card = document.createElement('div');
    card.className = 'role-card';
    card.innerHTML = `
      <div class="role-card-header">
        <span style="font-size: 2rem;">${role.icon}</span>
        <div>
          <h4>${role.title}</h4>
          <span class="sub-text">보상: +${role.rewardMoney}미소 / +${role.rewardExp}EXP</span>
        </div>
      </div>
      <p style="font-size:0.83rem; color:var(--text-muted); margin-bottom:12px;">${role.description}</p>
      <div style="font-size:0.85rem; font-weight:700;">
        담당 학생 (${assignedStudents.length}명):
        <select class="role-assign-select" onchange="assignRoleToStudent(this.value, '${role.id}')">
          <option value="">-- 학생 지정하기 --</option>
          ${state.students.map(s => `
            <option value="${s.id}" ${s.roleId === role.id ? 'selected' : ''}>
              ${s.number}번 ${s.name} ${s.roleId === role.id ? '(현재)' : ''}
            </option>
          `).join('')}
        </select>
      </div>
    `;
    grid.appendChild(card);
  });
}

function assignRoleToStudent(studentId, roleId) {
  if (!studentId) return;
  const student = state.students.find(s => s.id === studentId);
  if (student) {
    student.roleId = roleId;
    saveState();
    renderTeacherDashboard();
    renderRolesAdmin();
    renderStudentDashboard();
    showToast(`${student.name} 학생에게 역할이 배정되었습니다.`, 'success');
  }
}

function autoAssignRolesRandomly() {
  if (confirm('모든 학생에게 1인 1역을 랜덤으로 새로 배정하시겠습니까?')) {
    const shuffledRoles = [...state.roles].sort(() => Math.random() - 0.5);
    state.students.forEach((s, idx) => {
      const assignedRole = shuffledRoles[idx % shuffledRoles.length];
      s.roleId = assignedRole.id;
    });
    saveState();
    renderTeacherDashboard();
    renderRolesAdmin();
    renderStudentDashboard();
    showToast('🎲 25명 학생 모두에게 1인 1역이 랜덤 배정되었습니다!', 'success');
  }
}

function openAddRoleModal() {
  document.getElementById('form-role-item').reset();
  openModal('modal-role-item');
}

function handleRoleSubmit(e) {
  e.preventDefault();
  const newRole = {
    id: 'role-' + Date.now(),
    title: document.getElementById('role-title').value.trim(),
    icon: document.getElementById('role-icon').value.trim() || '🧹',
    rewardMoney: parseInt(document.getElementById('role-reward-money').value, 10),
    rewardExp: parseInt(document.getElementById('role-reward-exp').value, 10),
    description: document.getElementById('role-desc').value.trim()
  };

  state.roles.push(newRole);
  saveState();
  closeModal('modal-role-item');
  renderRolesAdmin();
  showToast('새 1인 1역 역할이 추가되었습니다.', 'success');
}

// ---------------------------------------------------------
// 9. History Renderer & CSV Export
// ---------------------------------------------------------

function renderGlobalHistory() {
  const tbody = document.getElementById('global-history-tbody');
  tbody.innerHTML = '';

  state.history.forEach(h => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${h.timestamp}</td>
      <td><strong>${h.studentName}</strong></td>
      <td><span class="chip ${h.type === 'plus' ? '' : 'chip-danger'}">${h.type === 'plus' ? '지급' : '차감'}</span></td>
      <td style="color:${h.amount >= 0 ? 'var(--accent-gold)' : 'var(--accent-red)'}; font-weight:800;">
        ${h.amount >= 0 ? '+' : ''}${h.amount} 미소
      </td>
      <td>+${h.exp} EXP</td>
      <td>${h.reason}</td>
    `;
    tbody.appendChild(tr);
  });
}

function openStudentHistoryModal() {
  const student = state.students.find(s => s.id === state.currentStudentId);
  const list = document.getElementById('stu-history-list');
  list.innerHTML = '';

  const myHistory = state.history.filter(h => h.studentId === state.currentStudentId);

  if (myHistory.length === 0) {
    list.innerHTML = '<p class="sub-text" style="padding:15px; text-align:center;">활동 내역이 아직 없습니다.</p>';
  } else {
    myHistory.forEach(h => {
      const li = document.createElement('li');
      li.style.padding = '10px 0';
      li.style.borderBottom = '1px solid var(--border-color)';
      li.style.display = 'flex';
      li.style.justifyContent = 'space-between';
      li.innerHTML = `
        <div>
          <div style="font-weight:700; font-size:0.9rem;">${h.reason}</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${h.timestamp}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-weight:800; color:${h.amount >= 0 ? 'var(--accent-gold)' : 'var(--accent-red)'};">
            ${h.amount >= 0 ? '+' : ''}${h.amount} 미소
          </div>
          <div style="font-size:0.75rem; color:var(--secondary);">+${h.exp} EXP</div>
        </div>
      `;
      list.appendChild(li);
    });
  }

  openModal('modal-student-history');
}

function exportHistoryCSV() {
  let csv = '일시,학생명,구분,화폐변동,경험치변동,사유\n';
  state.history.forEach(h => {
    csv += `"${h.timestamp}","${h.studentName}","${h.type === 'plus' ? '지급' : '차감'}",${h.amount},${h.exp},"${h.reason}"\n`;
  });

  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ClassEconomy_활동기록_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  showToast('CSV 파일로 거래 기록이 다운로드되었습니다.', 'success');
}
