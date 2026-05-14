(function(){
  if (window.__sepoOpenPrecargaTextDefaultsFinal) return;
  window.__sepoOpenPrecargaTextDefaultsFinal = true;

  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function getRoot(){ return q('#mpContenedorPregunta') || document; }

  function parseValues(raw){
    return String(raw || '').split('|').join(',').split(',').map(function(v){ return v.trim(); }).filter(Boolean);
  }

  function getCount(root){
    var tipoResp = q('#mp_A_tipoResp', root);
    var isMulti = tipoResp && String(tipoResp.value || '').toLowerCase() === 'multiple';
    if (!isMulti) return 1;
    var num = parseInt((q('#mp_A_numResp', root) || {}).value, 10);
    if (!Number.isFinite(num) || num < 1) return 1;
    return Math.min(num, 20);
  }

  function getSeed(root){
    var hostHidden = q('#mp_A_precargaValue_stable', root);
    var legacyHidden = q('#mp_A_precargaValue', root);
    var fields = q('#mp_A_precargaFields', root);
    var raw = (hostHidden && hostHidden.value) || (legacyHidden && legacyHidden.value) || (fields && fields.dataset && fields.dataset.sepoOpenPrecargaSeed) || '';
    return parseValues(raw);
  }

  function writeValue(root, values){
    var raw = values.map(function(v){ return String(v || '').trim(); }).filter(Boolean).join(', ');
    var stable = q('#mp_A_precargaValue_stable', root);
    if (stable) stable.value = raw;
    var legacy = q('#mp_A_precargaValue', root);
    if (!legacy) {
      var host = q('#mp_A_precargaStableHost', root);
      if (host) {
        legacy = document.createElement('input');
        legacy.type = 'hidden';
        legacy.id = 'mp_A_precargaValue';
        host.appendChild(legacy);
      }
    }
    if (legacy) legacy.value = raw;
    var fields = q('#mp_A_precargaFields', root);
    if (fields && fields.dataset) fields.dataset.sepoOpenPrecargaSeed = raw;
  }

  function ensureHost(root){
    var box = q('#mp_A_boxPrecarga', root);
    if (!box) return null;
    var fields = q('#mp_A_precargaFields', root);
    if (fields) {
      fields.dataset.sepoManagedOpenPrecarga = '1';
      fields.style.display = 'none';
      fields.innerHTML = '';
    }
    var host = q('#mp_A_precargaStableHost', box);
    if (!host) {
      host = document.createElement('div');
      host.id = 'mp_A_precargaStableHost';
      host.className = 'p-3 bg-light rounded border border-secondary border-opacity-25';
      if (fields && fields.parentNode === box) box.insertBefore(host, fields.nextSibling);
      else box.appendChild(host);
    }
    return host;
  }

  function buildInputs(root){
    var host = ensureHost(root);
    if (!host) return;
    var count = getCount(root);
    var seed = getSeed(root);
    var previous = qa('.mp-open-precarga-input', host).map(function(input){ return input.value || ''; });
    var values = previous.length ? previous : seed;

    host.innerHTML = '';

    var titleRow = document.createElement('div');
    titleRow.className = 'd-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2 mb-2';

    var label = document.createElement('label');
    label.className = 'form-label small text-primary fw-bold mb-0';
    label.innerHTML = '<i class="fas fa-keyboard me-1"></i> Valores por defecto:';

    var hint = document.createElement('span');
    hint.className = 'small text-muted';
    hint.textContent = 'Ingrese un valor por cada respuesta permitida.';

    titleRow.appendChild(label);
    titleRow.appendChild(hint);

    var hiddenStable = document.createElement('input');
    hiddenStable.type = 'hidden';
    hiddenStable.id = 'mp_A_precargaValue_stable';

    var hiddenLegacy = document.createElement('input');
    hiddenLegacy.type = 'hidden';
    hiddenLegacy.id = 'mp_A_precargaValue';

    var grid = document.createElement('div');
    grid.className = 'row g-2';
    grid.id = 'mp_A_precargaTextDefaults';

    for (var i = 0; i < count; i++) {
      var col = document.createElement('div');
      col.className = 'col-md-6';

      var inputLabel = document.createElement('label');
      inputLabel.className = 'form-label small text-muted fw-bold mb-1';
      inputLabel.textContent = 'Valor por defecto ' + (i + 1);

      var input = document.createElement('input');
      input.type = 'text';
      input.className = 'form-control form-control-sm mp-open-precarga-input';
      input.placeholder = 'Ingrese valor por defecto ' + (i + 1);
      input.value = values[i] || '';

      col.appendChild(inputLabel);
      col.appendChild(input);
      grid.appendChild(col);
    }

    host.appendChild(titleRow);
    host.appendChild(hiddenStable);
    host.appendChild(hiddenLegacy);
    host.appendChild(grid);

    function sync(){
      writeValue(root, qa('.mp-open-precarga-input', host).map(function(input){ return input.value || ''; }));
    }
    qa('.mp-open-precarga-input', host).forEach(function(input){ input.addEventListener('input', sync); });
    sync();
  }

  function apply(){
    var root = getRoot();
    var yes = q('#mp_A_precargaSi', root);
    var editableWrap = q('#mp_A_editableWrap', root);
    var box = q('#mp_A_boxPrecarga', root);
    var host = ensureHost(root);
    if (!yes || !editableWrap || !box || !host) return;

    editableWrap.style.display = yes.checked ? 'block' : 'none';

    var show = !!yes.checked;
    box.style.display = show ? 'block' : 'none';
    host.style.display = show ? 'block' : 'none';

    if (show) buildInputs(root);
    else {
      host.innerHTML = '';
      writeValue(root, []);
    }
  }

  var raf = 0;
  function schedule(){
    if (raf) return;
    raf = requestAnimationFrame(function(){
      raf = 0;
      try { apply(); } catch (err) { console.error('open precarga text defaults failed', err); }
    });
  }

  var prevCtrl = window.ctrlAbierta;
  window.ctrlAbierta = function(){
    var res = typeof prevCtrl === 'function' ? prevCtrl.apply(this, arguments) : undefined;
    schedule();
    return res;
  };

  var prevRender = window.renderizarControlesPregunta;
  if (typeof prevRender === 'function') {
    window.renderizarControlesPregunta = function(){
      var res = prevRender.apply(this, arguments);
      schedule();
      return res;
    };
  }

  document.addEventListener('change', function(e){
    if (!e.target) return;
    if (['mp_A_precargaSi','mp_A_precargaNo','mp_A_editable','mp_A_tipoResp','mp_A_numResp'].indexOf(e.target.id) !== -1) schedule();
  }, true);

  document.addEventListener('input', function(e){
    if (!e.target) return;
    if (['mp_A_numResp'].indexOf(e.target.id) !== -1 || (e.target.classList && e.target.classList.contains('mp-open-precarga-input'))) schedule();
  }, true);

  var mo = new MutationObserver(schedule);
  mo.observe(document.documentElement, { childList:true, subtree:true });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', schedule, { once:true });
  else schedule();
})();
