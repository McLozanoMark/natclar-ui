(() => {
  const DATA = {
    prestaciones: {
      title: 'Lista de prestaciones',
      filename: 'lista_prestaciones.xls',
      columns: ['Código de prestación', 'Descripción de prestación', 'Vinculado a grupo ocupacional'],
      rows: [
        ['PRE-001', 'Evaluación Psicológica', 'Sí'],
        ['PRE-002', 'Riesgo Psicosocial', 'Sí'],
        ['PRE-003', 'Fatiga y Somnolencia', 'Sí'],
        ['PRE-004', 'Conducción Segura', 'No'],
      ],
    },
    fichas: {
      title: 'Lista de fichas',
      filename: 'lista_fichas.xls',
      columns: ['Código de ficha', 'Descripción de ficha', 'Código dato', 'Descripción de código dato'],
      rows: [
        ['FCH-001', 'Ficha de ansiedad', 'DAT-001', 'Nivel de ansiedad'],
        ['FCH-001', 'Ficha de ansiedad', 'DAT-002', 'Frecuencia de episodios'],
        ['FCH-002', 'Ficha de estrés', 'DAT-010', 'Nivel de estrés'],
        ['FCH-003', 'Ficha de somnolencia', 'DAT-018', 'Tiempo de reacción'],
      ],
    },
    pruebas: {
      title: 'Lista de pruebas psicológicas',
      filename: 'lista_pruebas_psicologicas.xls',
      columns: ['Descripción de prueba', 'Tiempo', 'Estado'],
      rows: [
        ['Escala de Ansiedad CPS-001', '20 min', 'Activo'],
        ['Test de Estrés Laboral TEL-014', '25 min', 'Activo'],
        ['Índice de Somnolencia IS-002', '15 min', 'Inactivo'],
        ['Evaluación de Riesgo Psicosocial ERP-008', '30 min', 'Activo'],
      ],
    },
    orden: {
      title: 'Lista de orden de pruebas',
      filename: 'lista_orden_pruebas.xls',
      columns: ['Código de prestación', 'Descripción de prestación', 'Descripción de prueba', 'Orden'],
      rows: [
        ['PRE-001', 'Evaluación Psicológica', 'Escala de Ansiedad CPS-001', '1'],
        ['PRE-001', 'Evaluación Psicológica', 'Test de Estrés Laboral TEL-014', '2'],
        ['PRE-003', 'Fatiga y Somnolencia', 'Índice de Somnolencia IS-002', '1'],
        ['PRE-004', 'Conducción Segura', 'Prueba de Atención Selectiva PAS-005', '1'],
      ],
    },
    'fichas-pruebas': {
      title: 'Lista de fichas y pruebas asociadas',
      filename: 'lista_fichas_pruebas_asociadas.xls',
      columns: ['Código de ficha', 'Descripción de ficha', 'Código de dato', 'Descripción de código de dato', 'Descripción de prueba'],
      rows: [
        ['FCH-001', 'Ficha de ansiedad', 'DAT-001', 'Nivel de ansiedad', 'Escala de Ansiedad CPS-001'],
        ['FCH-001', 'Ficha de ansiedad', 'DAT-002', 'Frecuencia de episodios', 'Escala de Ansiedad CPS-001'],
        ['FCH-002', 'Ficha de estrés', 'DAT-010', 'Nivel de estrés', 'Test de Estrés Laboral TEL-014'],
        ['FCH-003', 'Ficha de somnolencia', 'DAT-018', 'Tiempo de reacción', 'Índice de Somnolencia IS-002'],
      ],
    },
    'tiempo-duracion-pruebas': {
      title: 'Tiempo de duración de las pruebas psicológicas',
      filename: 'tiempo_duracion_pruebas_psicologicas.xls',
      columns: [
        'Empresa',
        'Id Episodio',
        'Tipo de Examen',
        'DNI del paciente',
        'Nombres del paciente',
        'Fecha de examen',
        'Prestación',
        'Prueba psicológica',
        'Fecha y hora de inicio',
        'Fecha y hora de fin',
      ],
      rows: [
        ['Constructora Andina S.A.C.', 'EPI-2026-00124', 'Pre ocupacional', '74251863', 'María Fernanda Quispe Rojas', '28/04/2026', 'Evaluación Psicológica', 'Escala de Ansiedad CPS-001', '28/04/2026 08:12', '28/04/2026 08:34'],
        ['Transportes El Pacífico S.R.L.', 'EPI-2026-00125', 'Periódico', '45872190', 'Carlos Alberto Huamán Torres', '28/04/2026', 'Fatiga y Somnolencia', 'Índice de Somnolencia IS-002', '28/04/2026 09:05', '28/04/2026 09:21'],
        ['Servicios Mineros del Sur S.A.', 'EPI-2026-00126', 'Retiro', '70361425', 'Lucía del Carmen Vargas Paredes', '29/04/2026', 'Riesgo Psicosocial', 'Test de Estrés Laboral TEL-014', '29/04/2026 10:18', '29/04/2026 10:46'],
        ['Agroindustrial Santa Rosa S.A.C.', 'EPI-2026-00127', 'Pre ocupacional', '61839047', 'José Miguel Cárdenas León', '29/04/2026', 'Conducción Segura', 'Prueba de Atención Selectiva PAS-005', '29/04/2026 11:02', '29/04/2026 11:19'],
      ],
    },

    'resultados-historicos': {
      title: 'Resultados históricos por prueba y fecha',
      filename: 'resultados_historicos_por_prueba_fecha.xls',
      columns: ['Id episodio', 'Empresa', 'Fecha de examen', 'DNI Paciente', 'Ocupación', 'Prueba', 'Nro de pregunta', 'Pregunta', 'Respuesta'],
      rows: [
        ['EPI-2026-00124', 'Constructora Andina S.A.C.', '2026-04-10', '74251863', 'Operador de maquinaria', 'Escala de Ansiedad CPS-001', '1', '¿Ha sentido preocupación constante?', 'A veces'],
        ['EPI-2026-00124', 'Constructora Andina S.A.C.', '2026-04-10', '74251863', 'Operador de maquinaria', 'Escala de Ansiedad CPS-001', '2', '¿Le cuesta relajarse al final del día?', 'Frecuente'],
        ['EPI-2026-00131', 'Servicios Generales Lima S.A.C.', '2026-04-16', '73000000', 'Asistente administrativo', 'Escala de Ansiedad CPS-001', '3', '¿Presenta tensión muscular frecuente?', 'Sí'],
        ['EPI-2026-00126', 'Servicios Mineros del Sur S.A.', '2026-04-18', '70361425', 'Supervisor de campo', 'Test de Estrés Laboral TEL-014', '1', '¿Percibe carga laboral excesiva?', 'Casi siempre'],
        ['EPI-2026-00126', 'Servicios Mineros del Sur S.A.', '2026-04-18', '70361425', 'Supervisor de campo', 'Test de Estrés Laboral TEL-014', '2', '¿Cuenta con pausas suficientes durante la jornada?', 'No'],
        ['EPI-2026-00125', 'Transportes El Pacífico S.R.L.', '2026-04-22', '45872190', 'Conductor', 'Índice de Somnolencia IS-002', '1', '¿Se ha quedado dormido durante el traslado?', 'Nunca'],
        ['EPI-2026-00125', 'Transportes El Pacífico S.R.L.', '2026-04-22', '45872190', 'Conductor', 'Índice de Somnolencia IS-002', '2', '¿Siente pesadez en los ojos al conducir?', 'Ocasionalmente'],
      ],
    },
    'pruebas-detalle': {
      title: 'Lista de pruebas psicológicas con detalle',
      filename: 'lista_pruebas_psicologicas_detalle.xls',
      byTest: {
        'Escala de Ansiedad CPS-001': {
          summary: [
            ['Descripción de prueba', 'Escala de Ansiedad CPS-001'],
            ['Tiempo', '20 min'],
            ['Estado', 'Activo'],
          ],
          columns: ['Nro. pregunta', 'Descripción de pregunta', 'Viñeta alternativa', 'Descripción de alternativa', 'Código de prestación', 'Descripción de prestación', 'Código de ficha', 'Descripción de ficha'],
          rows: [
            ['1', '¿Ha sentido preocupación constante?', 'A', 'Nunca', 'PRE-001', 'Evaluación Psicológica', 'FCH-001', 'Ficha de ansiedad'],
            ['2', '¿Le cuesta relajarse al final del día?', 'B', 'A veces', 'PRE-001', 'Evaluación Psicológica', 'FCH-001', 'Ficha de ansiedad'],
            ['3', '¿Presenta tensión muscular frecuente?', 'C', 'Frecuente', 'PRE-001', 'Evaluación Psicológica', 'FCH-002', 'Ficha de estrés'],
          ],
        },
        'Test de Estrés Laboral TEL-014': {
          summary: [
            ['Descripción de prueba', 'Test de Estrés Laboral TEL-014'],
            ['Tiempo', '25 min'],
            ['Estado', 'Activo'],
          ],
          columns: ['Nro. pregunta', 'Descripción de pregunta', 'Viñeta alternativa', 'Descripción de alternativa', 'Código de prestación', 'Descripción de prestación', 'Código de ficha', 'Descripción de ficha'],
          rows: [
            ['1', '¿Percibe carga laboral excesiva?', 'A', 'Nunca', 'PRE-002', 'Riesgo Psicosocial', 'FCH-002', 'Ficha de estrés'],
            ['2', '¿Cuenta con pausas suficientes durante la jornada?', 'B', 'A veces', 'PRE-002', 'Riesgo Psicosocial', 'FCH-002', 'Ficha de estrés'],
            ['3', '¿Se siente agotado al terminar el turno?', 'C', 'Casi siempre', 'PRE-002', 'Riesgo Psicosocial', 'FCH-002', 'Ficha de estrés'],
          ],
        },
        'Índice de Somnolencia IS-002': {
          summary: [
            ['Descripción de prueba', 'Índice de Somnolencia IS-002'],
            ['Tiempo', '15 min'],
            ['Estado', 'Inactivo'],
          ],
          columns: ['Nro. pregunta', 'Descripción de pregunta', 'Viñeta alternativa', 'Descripción de alternativa', 'Código de prestación', 'Descripción de prestación', 'Código de ficha', 'Descripción de ficha'],
          rows: [
            ['1', '¿Se ha quedado dormido durante el traslado?', 'A', 'Nunca', 'PRE-003', 'Fatiga y Somnolencia', 'FCH-003', 'Ficha de somnolencia'],
            ['2', '¿Siente pesadez en los ojos al conducir?', 'B', 'Ocasionalmente', 'PRE-003', 'Fatiga y Somnolencia', 'FCH-003', 'Ficha de somnolencia'],
            ['3', '¿Requiere detenerse para descansar?', 'C', 'Frecuente', 'PRE-003', 'Fatiga y Somnolencia', 'FCH-003', 'Ficha de somnolencia'],
          ],
        },
      },
    },
  };

  const state = { bootstrap: {}, currentType: '', currentDetailTest: '', historicoFechaInicio: '2026-04-01', historicoFechaFin: '2026-04-30' };

  document.addEventListener('DOMContentLoaded', () => {
    initBootstrap();
    initSidebar();
    fillDetailTests();
    bindEvents();
  });

  function initBootstrap() {
    state.bootstrap.toast = new bootstrap.Toast(document.getElementById('rp_toast'), { delay: 2600 });
  }

  function initSidebar() {
    const sidebar = document.getElementById('rp_sidebar');
    const main = document.getElementById('rp_mainContent');
    const toggle = () => {
      sidebar.classList.toggle('collapsed');
      main.classList.toggle('expanded');
    };
    document.getElementById('rp_sidebarToggle').addEventListener('click', toggle);
    document.getElementById('rp_sidebarBrandBtn').addEventListener('click', toggle);
  }

  function bindEvents() {
    document.getElementById('rp_tipoReporte').addEventListener('change', onTypeChange);
    document.getElementById('rp_pruebaDetalle').addEventListener('change', onDetailTestChange);
    document.getElementById('rp_fechaInicioHistorico').addEventListener('change', onHistoricoFilterChange);
    document.getElementById('rp_fechaFinHistorico').addEventListener('change', onHistoricoFilterChange);
    document.getElementById('rp_btnDescargar').addEventListener('click', downloadCurrentReport);
  }

  function fillDetailTests() {
    const select = document.getElementById('rp_pruebaDetalle');
    const tests = Array.from(new Set([
      ...Object.keys(DATA['pruebas-detalle'].byTest),
      ...DATA['resultados-historicos'].rows.map((row) => row[5]),
    ]));
    select.innerHTML = '<option value="">[Seleccione prueba]</option>' + tests.map((t) => `<option value="${escapeAttr(t)}">${escapeHtml(t)}</option>`).join('');
  }

  function onTypeChange() {
    const type = document.getElementById('rp_tipoReporte').value;
    state.currentType = type;
    const pruebaWrap = document.getElementById('rp_wrapPruebaDetalle');
    const inicioWrap = document.getElementById('rp_wrapFechaInicioHistorico');
    const finWrap = document.getElementById('rp_wrapFechaFinHistorico');
    const requiresTest = type === 'pruebas-detalle' || type === 'resultados-historicos';
    const isHistorico = type === 'resultados-historicos';

    pruebaWrap.classList.toggle('d-none', !requiresTest);
    inicioWrap.classList.toggle('d-none', !isHistorico);
    finWrap.classList.toggle('d-none', !isHistorico);

    if (requiresTest) {
      state.currentDetailTest = document.getElementById('rp_pruebaDetalle').value;
    } else {
      document.getElementById('rp_pruebaDetalle').value = '';
      state.currentDetailTest = '';
    }

    if (isHistorico) {
      state.historicoFechaInicio = document.getElementById('rp_fechaInicioHistorico').value;
      state.historicoFechaFin = document.getElementById('rp_fechaFinHistorico').value;
    }
    renderPreview();
  }

  function onDetailTestChange() {
    state.currentDetailTest = document.getElementById('rp_pruebaDetalle').value;
    renderPreview();
  }

  function onHistoricoFilterChange() {
    state.historicoFechaInicio = document.getElementById('rp_fechaInicioHistorico').value;
    state.historicoFechaFin = document.getElementById('rp_fechaFinHistorico').value;
    renderPreview();
  }

  function renderPreview() {
    const empty = document.getElementById('rp_emptyState');
    const content = document.getElementById('rp_previewContent');
    const help = document.getElementById('rp_previewHelp');
    const meta = document.getElementById('rp_previewMeta');

    if (!state.currentType) {
      empty.classList.remove('d-none');
      content.classList.add('d-none');
      content.innerHTML = '';
      help.textContent = 'Seleccione un tipo de reporte para visualizar el contenido que se descargará.';
      meta.textContent = '';
      return;
    }

    const html = state.currentType === 'pruebas-detalle'
      ? renderDetailPreview()
      : state.currentType === 'resultados-historicos'
        ? renderHistoricalPreview()
        : renderStandardPreview(DATA[state.currentType]);
    empty.classList.add('d-none');
    content.classList.remove('d-none');
    content.innerHTML = html;
    help.textContent = 'La previsualización muestra la estructura del archivo Excel que se descargará.';

    const count = state.currentType === 'pruebas-detalle'
      ? (state.currentDetailTest && DATA['pruebas-detalle'].byTest[state.currentDetailTest] ? DATA['pruebas-detalle'].byTest[state.currentDetailTest].rows.length : 0)
      : state.currentType === 'resultados-historicos'
        ? getHistoricalRows().length
        : DATA[state.currentType].rows.length;
    meta.textContent = `${count} registro${count === 1 ? '' : 's'}`;
  }

  function renderStandardPreview(config) {
    return `
      <div class="rp-sheet">
        <div class="rp-sheet-head">
          <div>
            <div class="rp-sheet-title">${escapeHtml(config.title)}</div>
            <div class="rp-sheet-subtitle">Formato Excel · columnas definidas para descarga</div>
          </div>
          <span class="rp-sheet-badge"><i class="fas fa-file-excel"></i>${config.rows.length} registro${config.rows.length === 1 ? '' : 's'}</span>
        </div>
        <div class="rp-table-wrap">${tableHtml(config.columns, config.rows)}</div>
      </div>
    `;
  }

  function getHistoricalRows() {
    const config = DATA['resultados-historicos'];
    const from = state.historicoFechaInicio || '0000-00-00';
    const to = state.historicoFechaFin || '9999-12-31';
    return config.rows.filter((row) => {
      const matchesTest = !state.currentDetailTest || row[5] === state.currentDetailTest;
      const date = row[2];
      return matchesTest && date >= from && date <= to;
    });
  }

  function renderHistoricalPreview() {
    if (!state.currentDetailTest) {
      return `
        <div class="rp-sheet">
          <div class="rp-empty-state" style="min-height: 280px;">
            <i class="fas fa-clock-rotate-left"></i>
            <div>Seleccione una prueba para visualizar resultados históricos.</div>
          </div>
        </div>
      `;
    }

    const config = DATA['resultados-historicos'];
    const rows = getHistoricalRows();
    const displayRows = rows.map((row) => [row[0], row[1], formatDateDisplay(row[2]), row[3], row[4], row[5], row[6], row[7], row[8]]);
    return `
      <div class="rp-sheet">
        <div class="rp-sheet-head">
          <div>
            <div class="rp-sheet-title">${escapeHtml(config.title)}</div>
            <div class="rp-sheet-subtitle">Previsualización por prueba seleccionada y rango de fechas del episodio</div>
          </div>
          <span class="rp-sheet-badge"><i class="fas fa-file-excel"></i>${rows.length} registro${rows.length === 1 ? '' : 's'}</span>
        </div>

        <div class="rp-detail-summary rp-historical-summary">
          <div class="rp-summary-box">
            <div class="rp-summary-label">Prueba</div>
            <div class="rp-summary-value">${escapeHtml(state.currentDetailTest)}</div>
          </div>
          <div class="rp-summary-box">
            <div class="rp-summary-label">Fecha inicio</div>
            <div class="rp-summary-value">${escapeHtml(formatDateDisplay(state.historicoFechaInicio))}</div>
          </div>
          <div class="rp-summary-box">
            <div class="rp-summary-label">Fecha fin del episodio</div>
            <div class="rp-summary-value">${escapeHtml(formatDateDisplay(state.historicoFechaFin))}</div>
          </div>
        </div>

        <div class="rp-block-title">Resultados históricos registrados</div>
        <div class="rp-table-wrap">${tableHtml(config.columns, displayRows)}</div>
      </div>
    `;
  }

  function renderDetailPreview() {
    if (!state.currentDetailTest) {
      return `
        <div class="rp-sheet">
          <div class="rp-empty-state" style="min-height: 280px;">
            <i class="fas fa-list-check"></i>
            <div>Seleccione una prueba para visualizar su detalle.</div>
          </div>
        </div>
      `;
    }

    const detail = DATA['pruebas-detalle'].byTest[state.currentDetailTest];
    const summaryMap = Object.fromEntries(detail.summary);

    return `
      <div class="rp-sheet">
        <div class="rp-sheet-head">
          <div>
            <div class="rp-sheet-title">${escapeHtml(DATA['pruebas-detalle'].title)}</div>
            <div class="rp-sheet-subtitle">Previsualización del detalle interno de la prueba seleccionada</div>
          </div>
          <span class="rp-sheet-badge"><i class="fas fa-file-excel"></i>${detail.rows.length} detalle${detail.rows.length === 1 ? '' : 's'}</span>
        </div>

        <div class="rp-detail-summary">
          <div class="rp-summary-box">
            <div class="rp-summary-label">Descripción de prueba</div>
            <div class="rp-summary-value">${escapeHtml(summaryMap['Descripción de prueba'])}</div>
          </div>
          <div class="rp-summary-box">
            <div class="rp-summary-label">Tiempo</div>
            <div class="rp-summary-value">${escapeHtml(summaryMap['Tiempo'])}</div>
          </div>
          <div class="rp-summary-box">
            <div class="rp-summary-label">Estado</div>
            <div class="rp-summary-value">${escapeHtml(summaryMap['Estado'])}</div>
          </div>
        </div>

        <div class="rp-block-title">Detalle de preguntas y vínculos</div>
        <div class="rp-table-wrap">${tableHtml(detail.columns, detail.rows)}</div>
      </div>
    `;
  }

  function tableHtml(columns, rows) {
    return `
      <table class="table align-middle rp-table">
        <thead><tr>${columns.map((col) => `<th>${escapeHtml(col)}</th>`).join('')}</tr></thead>
        <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(String(cell))}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    `;
  }

  function downloadCurrentReport() {
    if (!state.currentType) {
      showToast('No ha seleccionado un tipo de reporte.', 'danger');
      return;
    }
    if (state.currentType === 'pruebas-detalle' && !state.currentDetailTest) {
      showToast('No ha seleccionado la prueba para visualizar el detalle.', 'danger');
      return;
    }
    if (state.currentType === 'resultados-historicos') {
      if (!state.currentDetailTest) {
        showToast('No ha seleccionado la prueba para el reporte histórico.', 'danger');
        return;
      }
      if (!state.historicoFechaInicio || !state.historicoFechaFin) {
        showToast('Debe seleccionar fecha inicio y fecha fin del episodio.', 'danger');
        return;
      }
    }

    const workbook = buildExcelHtml();
    const filename = buildFileName();
    const blob = new Blob([workbook], { type: 'application/vnd.ms-excel;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);

    showToast(`Se ha descargado ${buildSuccessName()} exitosamente.`, 'success');
  }

  function buildExcelHtml() {
    if (state.currentType === 'pruebas-detalle') {
      const detail = DATA['pruebas-detalle'].byTest[state.currentDetailTest];
      const summaryRows = detail.summary.map(([a, b]) => `<tr><td><strong>${escapeHtml(a)}</strong></td><td>${escapeHtml(b)}</td></tr>`).join('');
      return `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>
        <table border="1">${summaryRows}</table><br/>
        ${rawTableHtml(detail.columns, detail.rows)}
      </body></html>`;
    }
    if (state.currentType === 'resultados-historicos') {
      const config = DATA['resultados-historicos'];
      const rows = getHistoricalRows().map((row) => [row[0], row[1], formatDateDisplay(row[2]), row[3], row[4], row[5], row[6], row[7], row[8]]);
      const summaryRows = [
        ['Prueba', state.currentDetailTest],
        ['Fecha inicio', formatDateDisplay(state.historicoFechaInicio)],
        ['Fecha fin del episodio', formatDateDisplay(state.historicoFechaFin)],
      ].map(([a, b]) => `<tr><td><strong>${escapeHtml(a)}</strong></td><td>${escapeHtml(b)}</td></tr>`).join('');
      return `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>
        <table border="1">${summaryRows}</table><br/>
        ${rawTableHtml(config.columns, rows)}
      </body></html>`;
    }
    const config = DATA[state.currentType];
    return `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>${rawTableHtml(config.columns, config.rows)}</body></html>`;
  }

  function rawTableHtml(columns, rows) {
    return `<table border="1"><thead><tr>${columns.map((col) => `<th>${escapeHtml(col)}</th>`).join('')}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(String(cell))}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  }

  function buildFileName() {
    if (state.currentType === 'pruebas-detalle') {
      const base = DATA['pruebas-detalle'].filename.replace('.xls', '');
      const suffix = slugify(state.currentDetailTest || 'detalle');
      return `${base}_${suffix}.xls`;
    }
    if (state.currentType === 'resultados-historicos') {
      const base = DATA['resultados-historicos'].filename.replace('.xls', '');
      const suffix = slugify(state.currentDetailTest || 'prueba');
      return `${base}_${suffix}_${state.historicoFechaInicio || 'inicio'}_${state.historicoFechaFin || 'fin'}.xls`;
    }
    return DATA[state.currentType].filename;
  }

  function buildSuccessName() {
    const map = {
      prestaciones: 'la lista de prestaciones',
      fichas: 'la lista de fichas',
      pruebas: 'la lista de pruebas psicológicas',
      'pruebas-detalle': 'la lista de pruebas psicológicas con detalle',
      orden: 'la lista de orden de pruebas',
      'fichas-pruebas': 'la lista de fichas y pruebas asociadas',
      'tiempo-duracion-pruebas': 'el reporte de tiempo de duración de las pruebas psicológicas',
      'resultados-historicos': 'el reporte de resultados históricos por prueba y fecha',
    };
    return map[state.currentType] || 'el reporte';
  }

  function showToast(message, type) {
    const toastEl = document.getElementById('rp_toast');
    document.getElementById('rp_toastBody').textContent = message;
    toastEl.classList.remove('text-bg-dark', 'text-bg-danger');
    toastEl.classList.add(type === 'danger' ? 'text-bg-danger' : 'text-bg-dark');
    state.bootstrap.toast.show();
  }

  function formatDateDisplay(value) {
    if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return value || '';
    const [year, month, day] = value.split('-');
    return `${day}/${month}/${year}`;
  }

  function slugify(value) {
    return value.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, '&#96;');
  }
})();
