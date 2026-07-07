import React, { useState } from 'react';

// ── SVG Icon Components ──────────────────────────────────────────────────────
const IconDashboard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
);
const IconDatabase = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);
const IconInbound = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12H6m0 0l7-7m-7 7l7 7" /><rect x="2" y="3" width="4" height="18" rx="1" />
  </svg>
);
const IconOutbound = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12h16m0 0l-7-7m7 7l-7 7" /><rect x="18" y="3" width="4" height="18" rx="1" />
  </svg>
);
const IconReport = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
  </svg>
);
const IconPrint = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);
const IconSearch = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconBell = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);
const IconLogout = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
    <polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);
const IconBox = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const IconTrendUp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const IconTrendDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </svg>
);
const IconChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const IconPlus = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const IconList = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);
const IconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconFilter = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);
const IconEdit = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const IconTrash = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    <path d="M10 11v6" /><path d="M14 11v6" />
    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
  </svg>
);
const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconFlask = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6m-5 0v6L5.5 15a4 4 0 006.5 4.7A4 4 0 0018.5 15L14 9V3" />
    <line x1="6" y1="14" x2="18" y2="14" />
  </svg>
);

// ── Menu Config ──────────────────────────────────────────────────────────────
const MENU_ITEMS = [
  { key: 'dashboard', label: 'Dashboard', icon: <IconDashboard /> },
  {
    key: 'masterdata', label: 'Master Data', icon: <IconDatabase />,
    children: [
      { key: 'input_user', label: 'Input User' },
      { key: 'input_category_product', label: 'Category Product' },
      { key: 'input_product', label: 'Input Product' },
    ],
  },
  {
    key: 'inbound', label: 'Inbound', icon: <IconInbound />,
    children: [
      { key: 'input_inbound', label: 'Input Inbound' },
      { key: 'list_inbound', label: 'List Inbound' },
      { key: 'report_inbound', label: 'Report Inbound' },
    ],
  },
  { key: 'outbound', label: 'Outbound', icon: <IconOutbound /> },
  { key: 'report', label: 'Report', icon: <IconReport /> },
];

// ── Sample Inbound Data (with date_in & date_until) ──────────────────────────
const INITIAL_INBOUND_DATA = [
  {
    id: 1, product: 'MacBook Pro 14"', category: 'Electronics',
    supplier: 'PT. Apple Indonesia', qty: 15, price_unit: 28500000,
    date_in: '2024-06-01', date_until: '2024-06-30', status: 'Received',
  },
  {
    id: 2, product: 'Wireless Mouse Logitech', category: 'Peripherals',
    supplier: 'CV. Komputer Jaya', qty: 50, price_unit: 350000,
    date_in: '2024-06-05', date_until: '2024-07-05', status: 'Received',
  },
  {
    id: 3, product: 'USB-C Hub 7-in-1', category: 'Peripherals',
    supplier: 'CV. Komputer Jaya', qty: 30, price_unit: 450000,
    date_in: '2024-06-10', date_until: '2024-07-10', status: 'Pending',
  },
  {
    id: 4, product: 'Monitor LG 27" 4K', category: 'Electronics',
    supplier: 'PT. LG Electronics', qty: 8, price_unit: 6750000,
    date_in: '2024-06-12', date_until: '2024-07-12', status: 'Received',
  },
  {
    id: 5, product: 'Mechanical Keyboard', category: 'Peripherals',
    supplier: 'PT. Logitech SEA', qty: 20, price_unit: 1200000,
    date_in: '2024-06-15', date_until: '2024-07-15', status: 'Transit',
  },
];

const SAMPLE_OUTBOUND = [
  { id: 1, name: 'MacBook Pro 14"', category: 'Electronics', qty: 3, price: 28500000, date: '2024-06-14', status: 'Delivered' },
  { id: 2, name: 'Wireless Mouse', category: 'Peripherals', qty: 10, price: 350000, date: '2024-06-15', status: 'Delivered' },
  { id: 3, name: 'USB-C Hub', category: 'Peripherals', qty: 5, price: 450000, date: '2024-06-16', status: 'Transit' },
];

const CATEGORIES = ['Electronics', 'Peripherals', 'Furniture', 'Stationery', 'Networking', 'Lainnya'];
const SUPPLIERS = ['PT. Apple Indonesia', 'CV. Komputer Jaya', 'PT. LG Electronics', 'PT. Logitech SEA', 'PT. Samsung Indonesia'];

// ── Helpers ───────────────────────────────────────────────────────────────────
const fmtRupiah = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);
const handlePrint = () => window.print();

// ── Input Inbound Form ────────────────────────────────────────────────────────
function InputInbound({ onSave }) {
  const [form, setForm] = useState({
    product: '', category: '', supplier: '', qty: '', price_unit: '',
    date_in: '', date_until: '', status: 'Pending',
  });
  const [saved, setSaved] = useState(false);

  const total = (Number(form.qty) || 0) * (Number(form.price_unit) || 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...form,
      qty: Number(form.qty),
      price_unit: Number(form.price_unit),
    });
    setSaved(true);
    setForm({ product: '', category: '', supplier: '', qty: '', price_unit: '', date_in: '', date_until: '', status: 'Pending' });
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="page-wrapper">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Input Inbound</h1>
          <p className="page-subtitle">Tambah data barang masuk ke gudang</p>
        </div>
        <button className="icon-btn" onClick={handlePrint} id="btn-print-input-inbound">
          <IconPrint /><span>Print</span>
        </button>
      </div>

      {/* Alert success */}
      {saved && (
        <div className="alert alert--success">
          ✅ Data inbound berhasil disimpan!
        </div>
      )}

      {/* Form Card */}
      <div className="form-card">
        <div className="form-card-header">
          <IconPlus />
          <span>Form Data Barang Masuk</span>
        </div>
        <form onSubmit={handleSubmit} className="inbound-form">
          {/* Row 1 */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="product">Nama Produk *</label>
              <input
                type="text" id="product" name="product"
                value={form.product} onChange={handleChange}
                placeholder="Masukkan nama produk" required
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Kategori *</label>
              <select id="category" name="category" value={form.category} onChange={handleChange} required>
                <option value="">-- Pilih Kategori --</option>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="supplier">Supplier *</label>
              <select id="supplier" name="supplier" value={form.supplier} onChange={handleChange} required>
                <option value="">-- Pilih Supplier --</option>
                {SUPPLIERS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select id="status" name="status" value={form.status} onChange={handleChange}>
                <option value="Pending">Pending</option>
                <option value="Transit">Transit</option>
                <option value="Received">Received</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="qty">Jumlah (Qty) *</label>
              <input
                type="number" id="qty" name="qty" min="1"
                value={form.qty} onChange={handleChange}
                placeholder="0" required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price_unit">Harga Satuan (Rp) *</label>
              <input
                type="number" id="price_unit" name="price_unit" min="0"
                value={form.price_unit} onChange={handleChange}
                placeholder="0" required
              />
            </div>
          </div>

          {/* Row 4 – Dates */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date_in">Tanggal Masuk *</label>
              <div className="input-icon-wrap">
                <IconCalendar />
                <input
                  type="date" id="date_in" name="date_in"
                  value={form.date_in} onChange={handleChange} required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="date_until">Tanggal Sampai *</label>
              <div className="input-icon-wrap">
                <IconCalendar />
                <input
                  type="date" id="date_until" name="date_until"
                  value={form.date_until} onChange={handleChange} required
                />
              </div>
            </div>
          </div>

          {/* Total preview */}
          {total > 0 && (
            <div className="total-preview">
              <span className="total-label">Total Harga yang Harus Dibayar:</span>
              <span className="total-value">{fmtRupiah(total)}</span>
            </div>
          )}

          {/* Action */}
          <div className="form-actions">
            <button type="button" className="btn-outline"
              onClick={() => setForm({ product: '', category: '', supplier: '', qty: '', price_unit: '', date_in: '', date_until: '', status: 'Pending' })}>
              Reset
            </button>
            <button type="submit" className="btn-primary">
              <IconPlus /> Simpan Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── List Inbound Page ─────────────────────────────────────────────────────────
function ListInbound({ data }) {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterDateFrom, setFilterDateFrom] = useState('');
  const [filterDateTo, setFilterDateTo] = useState('');

  const filtered = data.filter(item => {
    const matchSearch =
      item.product.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.supplier.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus ? item.status === filterStatus : true;
    const matchFrom = filterDateFrom ? item.date_in >= filterDateFrom : true;
    const matchTo = filterDateTo ? item.date_in <= filterDateTo : true;
    return matchSearch && matchStatus && matchFrom && matchTo;
  });

  const grandTotal = filtered.reduce((a, c) => a + c.qty * c.price_unit, 0);

  return (
    <div className="page-wrapper">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">List Inbound</h1>
          <p className="page-subtitle">Daftar seluruh barang masuk ke gudang</p>
        </div>
        <button className="icon-btn" onClick={handlePrint} id="btn-print-list-inbound">
          <IconPrint /><span>Print</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="list-summary-row">
        <div className="summary-card summary-card--blue">
          <span className="sc-label">Total Item</span>
          <span className="sc-value">{filtered.length}</span>
        </div>
        <div className="summary-card summary-card--green">
          <span className="sc-label">Total Qty Masuk</span>
          <span className="sc-value">{filtered.reduce((a, c) => a + c.qty, 0).toLocaleString('id-ID')}</span>
        </div>
        <div className="summary-card summary-card--orange">
          <span className="sc-label">Total Harus Dibayar</span>
          <span className="sc-value sc-value--sm">{fmtRupiah(grandTotal)}</span>
        </div>
        <div className="summary-card summary-card--purple">
          <span className="sc-label">Sudah Diterima</span>
          <span className="sc-value">{filtered.filter(i => i.status === 'Received').length}</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="search-bar search-bar--wide">
          <IconSearch />
          <input
            type="text" placeholder="Cari produk, kategori, supplier..."
            value={search} onChange={e => setSearch(e.target.value)}
            id="input-search-list-inbound"
          />
        </div>

        <div className="filter-group">
          <IconFilter />
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} id="filter-status">
            <option value="">Semua Status</option>
            <option value="Received">Received</option>
            <option value="Pending">Pending</option>
            <option value="Transit">Transit</option>
          </select>
        </div>

        <div className="filter-group filter-date">
          <IconCalendar />
          <input type="date" value={filterDateFrom} onChange={e => setFilterDateFrom(e.target.value)}
            title="Dari tanggal" id="filter-date-from" />
          <span className="filter-date-sep">s/d</span>
          <input type="date" value={filterDateTo} onChange={e => setFilterDateTo(e.target.value)}
            title="Sampai tanggal" id="filter-date-to" />
        </div>

        {(search || filterStatus || filterDateFrom || filterDateTo) && (
          <button className="btn-clear-filter" onClick={() => {
            setSearch(''); setFilterStatus(''); setFilterDateFrom(''); setFilterDateTo('');
          }}>
            ✕ Reset Filter
          </button>
        )}
      </div>

      {/* Table */}
      <div className="table-card">
        <div className="table-wrap">
          <table className="data-table inbound-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Produk</th>
                <th>Kategori</th>
                <th>Supplier</th>
                <th>Qty</th>
                <th>Harga Satuan</th>
                <th>Tanggal Masuk</th>
                <th>Tanggal Sampai</th>
                <th>Total Bayar</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="10" className="td-empty">
                    <div className="empty-state-inline">
                      <IconBox />
                      <p>Tidak ada data yang sesuai filter</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filtered.map((item, idx) => (
                  <tr key={item.id}>
                    <td className="td-num">{idx + 1}</td>
                    <td className="td-name">{item.product}</td>
                    <td><span className="cat-badge">{item.category}</span></td>
                    <td className="td-supplier">{item.supplier}</td>
                    <td><span className="qty-chip">{item.qty.toLocaleString('id-ID')}</span></td>
                    <td className="td-price">{fmtRupiah(item.price_unit)}</td>
                    <td className="td-date">
                      <div className="date-cell">
                        <span className="date-main">{item.date_in}</span>
                      </div>
                    </td>
                    <td className="td-date">
                      <div className="date-cell date-cell--until">
                        <span className="date-main">{item.date_until}</span>
                      </div>
                    </td>
                    <td className="td-total">{fmtRupiah(item.qty * item.price_unit)}</td>
                    <td>
                      <span className={`status-badge status--${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            {filtered.length > 0 && (
              <tfoot>
                <tr className="tfoot-total">
                  <td colSpan="4" className="tfoot-label">Grand Total</td>
                  <td>
                    <span className="qty-chip">
                      {filtered.reduce((a, c) => a + c.qty, 0).toLocaleString('id-ID')}
                    </span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="tfoot-grand">{fmtRupiah(grandTotal)}</td>
                  <td></td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
        <div className="table-footer-info">
          Menampilkan <strong>{filtered.length}</strong> dari <strong>{data.length}</strong> data
        </div>
      </div>
    </div>
  );
}

// ── Dashboard Home Content ────────────────────────────────────────────────────
function DashboardHome({ inboundData }) {
  const totalItems = inboundData.length;
  const totalQty = inboundData.reduce((a, c) => a + c.qty, 0);
  const totalValue = inboundData.reduce((a, c) => a + c.qty * c.price_unit, 0);
  const pendingItems = inboundData.filter(i => i.status === 'Pending').length;

  return (
    <div className="db-home">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Selamat datang kembali, Admin 👋</p>
        </div>
        <div className="page-actions">
          <button className="icon-btn" title="Print Dashboard" onClick={handlePrint} id="btn-print-dashboard">
            <IconPrint /><span>Print</span>
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="stats-grid">
        <div className="stat-card stat-card--blue">
          <div className="stat-icon-wrap stat-icon--blue"><IconBox /></div>
          <div className="stat-info">
            <span className="stat-label">Total Produk</span>
            <span className="stat-number">{totalItems}</span>
          </div>
          <div className="stat-trend stat-trend--up"><IconTrendUp /><span>+12%</span></div>
        </div>
        <div className="stat-card stat-card--green">
          <div className="stat-icon-wrap stat-icon--green"><IconInbound /></div>
          <div className="stat-info">
            <span className="stat-label">Total Inbound</span>
            <span className="stat-number">{totalQty}</span>
          </div>
          <div className="stat-trend stat-trend--up"><IconTrendUp /><span>+8%</span></div>
        </div>
        <div className="stat-card stat-card--purple">
          <div className="stat-icon-wrap stat-icon--purple"><IconOutbound /></div>
          <div className="stat-info">
            <span className="stat-label">Total Outbound</span>
            <span className="stat-number">{SAMPLE_OUTBOUND.reduce((a, c) => a + c.qty, 0)}</span>
          </div>
          <div className="stat-trend stat-trend--down"><IconTrendDown /><span>-3%</span></div>
        </div>
        <div className="stat-card stat-card--orange">
          <div className="stat-icon-wrap stat-icon--orange"><IconReport /></div>
          <div className="stat-info">
            <span className="stat-label">Total Nilai</span>
            <span className="stat-number">Rp {(totalValue / 1000000).toFixed(1)}M</span>
          </div>
          <div className="stat-trend stat-trend--up"><IconTrendUp /><span>+5%</span></div>
        </div>
      </div>

      {/* Stats Detail + Recent Inbound Table */}
      <div className="db-lower-grid">
        {/* Stats Panel */}
        <div className="db-stats-panel">
          <div className="panel-header">
            <h3 className="panel-title">Stats Overview</h3>
          </div>
          <div className="stats-detail-list">
            {[
              { dot: 'blue', label: 'Total Inventaris', val: totalItems },
              { dot: 'green', label: 'Items Diterima', val: inboundData.filter(i => i.status === 'Received').length },
              { dot: 'orange', label: 'Items Pending', val: pendingItems },
              { dot: 'purple', label: 'Total Qty Keluar', val: SAMPLE_OUTBOUND.reduce((a, c) => a + c.qty, 0) },
              { dot: 'red', label: 'Total Transaksi', val: inboundData.length + SAMPLE_OUTBOUND.length },
            ].map(s => (
              <div key={s.label} className="stats-detail-item">
                <span className={`sd-dot sd-dot--${s.dot}`}></span>
                <span className="sd-label">{s.label}</span>
                <span className="sd-value">{s.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Inbound Table */}
        <div className="db-table-panel">
          <div className="panel-header">
            <h3 className="panel-title">Inbound Terbaru</h3>
            <div className="search-bar">
              <IconSearch />
              <input type="text" placeholder="Cari item..." id="input-search-inbound" />
            </div>
            <button className="icon-btn icon-btn--sm" onClick={handlePrint} title="Print" id="btn-print-inbound">
              <IconPrint />
            </button>
          </div>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Produk</th>
                  <th>Qty</th>
                  <th>Tgl Masuk</th>
                  <th>Tgl Sampai</th>
                  <th>Total Bayar</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {inboundData.map((item, idx) => (
                  <tr key={item.id}>
                    <td className="td-num">{idx + 1}</td>
                    <td className="td-name">{item.product}</td>
                    <td><span className="qty-chip">{item.qty}</span></td>
                    <td className="td-date">{item.date_in}</td>
                    <td className="td-date">{item.date_until}</td>
                    <td className="td-total">{fmtRupiah(item.qty * item.price_unit)}</td>
                    <td><span className={`status-badge status--${item.status.toLowerCase()}`}>{item.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Outbound Summary */}
      <div className="db-outbound-panel">
        <div className="panel-header">
          <h3 className="panel-title">Outbound Terbaru</h3>
          <button className="icon-btn icon-btn--sm" onClick={handlePrint} title="Print" id="btn-print-outbound">
            <IconPrint />
          </button>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th><th>Nama Item</th><th>Kategori</th>
                <th>Qty Keluar</th><th>Harga</th><th>Tanggal</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE_OUTBOUND.map((item, idx) => (
                <tr key={item.id}>
                  <td className="td-num">{idx + 1}</td>
                  <td className="td-name">{item.name}</td>
                  <td><span className="cat-badge cat-badge--out">{item.category}</span></td>
                  <td><span className="qty-chip qty-chip--out">{item.qty}</span></td>
                  <td>{fmtRupiah(item.price)}</td>
                  <td className="td-date">{item.date}</td>
                  <td><span className={`status-badge status--${item.status.toLowerCase()}`}>{item.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ── Product Data ──────────────────────────────────────────────────────────────
const PACKAGING_TYPES = ['Drum', 'Tempu', 'Derigen', 'Galon', 'Jerigen', 'Karung', 'Pail'];
const CHEMICAL_CATEGORIES = ['Bahan Kimia Cair', 'Bahan Kimia Padat', 'Pelarut', 'Asam', 'Basa', 'Surfaktan', 'Lainnya'];
const UNITS = ['Liter', 'Kg', 'Ton', 'pcs', 'ml', 'gram'];

const INITIAL_PRODUCT_DATA = [
  {
    id: 1, name: 'Drum Besi 200L', packaging: 'Drum', category: 'Bahan Kimia Cair',
    capacity: '200', unit: 'Liter', material: 'Besi / Steel',
    stock: 45, price: 185000, description: 'Drum besi standar industri 200 liter, cocok untuk penyimpanan bahan kimia cair non-korosif.',
    sku: 'PKG-DRM-001', status: 'Aktif',
  },
  {
    id: 2, name: 'Drum Plastik HDPE 220L', packaging: 'Drum', category: 'Bahan Kimia Cair',
    capacity: '220', unit: 'Liter', material: 'HDPE Plastik',
    stock: 30, price: 220000, description: 'Drum plastik HDPE tahan asam dan basa, kapasitas 220 liter.',
    sku: 'PKG-DRM-002', status: 'Aktif',
  },
  {
    id: 3, name: 'Tempu Stainless 50L', packaging: 'Tempu', category: 'Bahan Kimia Cair',
    capacity: '50', unit: 'Liter', material: 'Stainless Steel 304',
    stock: 20, price: 850000, description: 'Tempu stainless steel grade 304, tahan korosi, ideal untuk pelarut dan asam encer.',
    sku: 'PKG-TMP-001', status: 'Aktif',
  },
  {
    id: 4, name: 'Tempu Plastik PP 30L', packaging: 'Tempu', category: 'Bahan Kimia Cair',
    capacity: '30', unit: 'Liter', material: 'Polypropylene (PP)',
    stock: 60, price: 95000, description: 'Tempu plastik PP dengan tutup ulir kedap udara, tahan terhadap bahan kimia ringan.',
    sku: 'PKG-TMP-002', status: 'Aktif',
  },
  {
    id: 5, name: 'Derigen HDPE 20L', packaging: 'Derigen', category: 'Bahan Kimia Cair',
    capacity: '20', unit: 'Liter', material: 'HDPE Plastik',
    stock: 120, price: 45000, description: 'Derigen HDPE 20 liter dengan gagang, cocok untuk distribusi bahan kimia cair ringan.',
    sku: 'PKG-DRG-001', status: 'Aktif',
  },
  {
    id: 6, name: 'Derigen Aluminium 10L', packaging: 'Derigen', category: 'Pelarut',
    capacity: '10', unit: 'Liter', material: 'Aluminium',
    stock: 75, price: 130000, description: 'Derigen aluminium tahan pelarut organik, kapasitas 10 liter dengan segel aman.',
    sku: 'PKG-DRG-002', status: 'Aktif',
  },
  {
    id: 7, name: 'Jerigen HDPE 5L', packaging: 'Jerigen', category: 'Bahan Kimia Cair',
    capacity: '5', unit: 'Liter', material: 'HDPE Plastik',
    stock: 200, price: 18000, description: 'Jerigen HDPE 5 liter serbaguna untuk penyimpanan bahan kimia.',
    sku: 'PKG-JRG-001', status: 'Aktif',
  },
  {
    id: 8, name: 'Pail Besi 20L', packaging: 'Pail', category: 'Bahan Kimia Padat',
    capacity: '20', unit: 'Kg', material: 'Besi / Steel',
    stock: 40, price: 75000, description: 'Pail besi 20kg dengan tutup kunci untuk bahan kimia padat atau setengah padat.',
    sku: 'PKG-PIL-001', status: 'Nonaktif',
  },
];

// ── Product Modal ─────────────────────────────────────────────────────────────
function ProductModal({ isOpen, mode, product, onClose, onSave }) {
  const emptyForm = {
    name: '', packaging: 'Drum', category: 'Bahan Kimia Cair',
    capacity: '', unit: 'Liter', material: '', stock: '',
    price: '', description: '', sku: '', status: 'Aktif',
  };
  const [form, setForm] = useState(product || emptyForm);

  React.useEffect(() => {
    setForm(product || emptyForm);
  }, [product, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, stock: Number(form.stock), price: Number(form.price) });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-icon"><IconFlask /></span>
            <h2 className="modal-title">{mode === 'create' ? 'Tambah Produk Baru' : 'Edit Produk'}</h2>
          </div>
          <button className="modal-close" onClick={onClose} id="btn-modal-close"><IconX /></button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="modal-body">
            {/* Row 1 */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="sku">SKU / Kode Produk *</label>
                <input type="text" id="sku" name="sku" value={form.sku} onChange={handleChange}
                  placeholder="Contoh: PKG-DRM-001" required />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select id="status" name="status" value={form.status} onChange={handleChange}>
                  <option value="Aktif">Aktif</option>
                  <option value="Nonaktif">Nonaktif</option>
                </select>
              </div>
            </div>

            {/* Row 2 */}
            <div className="form-group">
              <label htmlFor="name">Nama Produk *</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange}
                placeholder="Contoh: Drum Besi 200L" required />
            </div>

            {/* Row 3 */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="packaging">Jenis Packaging *</label>
                <select id="packaging" name="packaging" value={form.packaging} onChange={handleChange} required>
                  {PACKAGING_TYPES.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="category">Kategori Bahan Kimia *</label>
                <select id="category" name="category" value={form.category} onChange={handleChange} required>
                  {CHEMICAL_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            {/* Row 4 */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="capacity">Kapasitas *</label>
                <input type="number" id="capacity" name="capacity" value={form.capacity} onChange={handleChange}
                  placeholder="Contoh: 200" min="0" required />
              </div>
              <div className="form-group">
                <label htmlFor="unit">Satuan *</label>
                <select id="unit" name="unit" value={form.unit} onChange={handleChange} required>
                  {UNITS.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
            </div>

            {/* Row 5 */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="material">Material / Bahan</label>
                <input type="text" id="material" name="material" value={form.material} onChange={handleChange}
                  placeholder="Contoh: HDPE Plastik, Besi, Stainless" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Harga Satuan (Rp) *</label>
                <input type="number" id="price" name="price" value={form.price} onChange={handleChange}
                  placeholder="0" min="0" required />
              </div>
            </div>

            {/* Row 6 */}
            <div className="form-group">
              <label htmlFor="stock">Stok Awal *</label>
              <input type="number" id="stock" name="stock" value={form.stock} onChange={handleChange}
                placeholder="0" min="0" required />
            </div>

            {/* Description */}
            <div className="form-group">
              <label htmlFor="description">Deskripsi</label>
              <textarea id="description" name="description" value={form.description} onChange={handleChange}
                placeholder="Deskripsi produk packaging..." rows={3} />
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-outline" onClick={onClose}>Batal</button>
            <button type="submit" className="btn-primary" id="btn-save-product">
              <IconPlus /> {mode === 'create' ? 'Simpan Produk' : 'Update Produk'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Input Product Page ────────────────────────────────────────────────────────
function InputProduct({ products, onAdd, onEdit, onDelete }) {
  const [search, setSearch] = useState('');
  const [filterPkg, setFilterPkg] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase()) ||
      p.material.toLowerCase().includes(search.toLowerCase());
    const matchPkg = filterPkg ? p.packaging === filterPkg : true;
    const matchStatus = filterStatus ? p.status === filterStatus : true;
    return matchSearch && matchPkg && matchStatus;
  });

  const handleCreate = () => {
    setModalMode('create');
    setSelectedProduct(null);
    setModalOpen(true);
  };

  const handleEdit = (product) => {
    setModalMode('edit');
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleSave = (data) => {
    if (modalMode === 'create') {
      onAdd({ ...data, id: Date.now() });
    } else {
      onEdit({ ...data, id: selectedProduct.id });
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    if (deleteId === id) {
      onDelete(id);
      setDeleteId(null);
    } else {
      setDeleteId(id);
    }
  };

  // Summary stats
  const totalActive = products.filter(p => p.status === 'Aktif').length;
  const totalStock = products.reduce((a, c) => a + c.stock, 0);
  const totalValue = products.reduce((a, c) => a + c.stock * c.price, 0);
  const pkgTypes = [...new Set(products.map(p => p.packaging))].length;

  const PACKAGING_COLORS = {
    Drum: { bg: '#eff6ff', color: '#2563eb', dot: '#3b82f6' },
    Tempu: { bg: '#f0fdf4', color: '#16a34a', dot: '#22c55e' },
    Derigen: { bg: '#fef9c3', color: '#ca8a04', dot: '#eab308' },
    Galon: { bg: '#fdf4ff', color: '#9333ea', dot: '#a855f7' },
    Jerigen: { bg: '#fff7ed', color: '#ea580c', dot: '#f97316' },
    Karung: { bg: '#f0f9ff', color: '#0284c7', dot: '#38bdf8' },
    Pail: { bg: '#fef2f2', color: '#dc2626', dot: '#f87171' },
  };

  return (
    <div className="page-wrapper">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Packaging Produk</h1>
          <p className="page-subtitle">Master data packaging bahan kimia — Drum, Tempu, Derigen & lainnya</p>
        </div>
        <div className="page-actions">
          <button className="icon-btn icon-btn--ghost" onClick={handlePrint} id="btn-print-products">
            <IconPrint />
          </button>
          <button className="btn-primary" onClick={handleCreate} id="btn-create-product">
            <IconPlus /> Tambah Produk
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="list-summary-row" style={{ marginBottom: '1.25rem' }}>
        <div className="summary-card summary-card--blue">
          <span className="sc-label">Total Produk Aktif</span>
          <span className="sc-value">{totalActive}</span>
        </div>
        <div className="summary-card summary-card--green">
          <span className="sc-label">Total Stok</span>
          <span className="sc-value">{totalStock.toLocaleString('id-ID')}</span>
        </div>
        <div className="summary-card summary-card--orange">
          <span className="sc-label">Nilai Inventaris</span>
          <span className="sc-value sc-value--sm">{fmtRupiah(totalValue)}</span>
        </div>
        <div className="summary-card summary-card--purple">
          <span className="sc-label">Jenis Packaging</span>
          <span className="sc-value">{pkgTypes}</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="search-bar search-bar--wide">
          <IconSearch />
          <input type="text" placeholder="Cari nama, SKU, material..."
            value={search} onChange={e => setSearch(e.target.value)}
            id="input-search-products" />
        </div>
        <div className="filter-group">
          <IconFilter />
          <select value={filterPkg} onChange={e => setFilterPkg(e.target.value)} id="filter-packaging">
            <option value="">Semua Packaging</option>
            {PACKAGING_TYPES.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div className="filter-group">
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} id="filter-product-status">
            <option value="">Semua Status</option>
            <option value="Aktif">Aktif</option>
            <option value="Nonaktif">Nonaktif</option>
          </select>
        </div>
        {(search || filterPkg || filterStatus) && (
          <button className="btn-clear-filter" onClick={() => { setSearch(''); setFilterPkg(''); setFilterStatus(''); }}>
            ✕ Reset
          </button>
        )}
        <span className="filter-count">{filtered.length} produk</span>
      </div>

      {/* Product Grid Cards */}
      {filtered.length === 0 ? (
        <div className="empty-card">
          <div className="empty-illustration"><IconFlask /></div>
          <p className="empty-title">Tidak ada produk ditemukan</p>
          <p className="empty-desc">Coba ubah filter atau tambah produk baru dengan tombol "Tambah Produk".</p>
        </div>
      ) : (
        <div className="product-grid">

        </div>
      )}

      {/* Product Table (print view) */}
      <div className="product-table-section">
        <div className="table-card" style={{ marginTop: '1.5rem' }}>
          <div className="panel-header" style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid var(--border)' }}>
            <h3 className="panel-title">Tabel Produk</h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{filtered.length} data</span>
          </div>
          <div className="table-wrap">
            <table className="data-table inbound-table">
              <thead>
                <tr>
                  <th>No</th><th>SKU</th><th>Nama Produk</th><th>Packaging</th>
                  <th>Kapasitas</th><th>Material</th><th>Stok</th>
                  <th>Harga Satuan</th><th>Total Nilai</th><th>Status</th>
                  <th style={{ textAlign: 'center' }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, idx) => (
                  <tr key={p.id}>
                    <td className="td-num">{idx + 1}</td>
                    <td><code className="sku-code">{p.sku}</code></td>
                    <td className="td-name">{p.name}</td>
                    <td>
                      <span className="pkg-badge" style={{
                        background: (PACKAGING_COLORS[p.packaging] || PACKAGING_COLORS.Drum).bg,
                        color: (PACKAGING_COLORS[p.packaging] || PACKAGING_COLORS.Drum).color,
                      }}>{p.packaging}</span>
                    </td>
                    <td className="td-date">{p.capacity} {p.unit}</td>
                    <td className="td-supplier">{p.material}</td>
                    <td><span className={`qty-chip ${p.stock < 20 ? 'qty-chip--low' : ''}`}>{p.stock}</span></td>
                    <td className="td-price">{fmtRupiah(p.price)}</td>
                    <td className="td-total">{fmtRupiah(p.stock * p.price)}</td>
                    <td><span className={`status-badge ${p.status === 'Aktif' ? 'status--received' : 'status--pending'}`}>{p.status}</span></td>
                    <td className="td-actions">
                      <button
                        className="tbl-btn tbl-btn--edit"
                        onClick={() => handleEdit(p)}
                        title="Edit produk"
                        id={`btn-tbl-edit-${p.id}`}
                      >
                        <IconEdit /> Edit
                      </button>
                      <button
                        className={`tbl-btn ${deleteId === p.id ? 'tbl-btn--confirm' : 'tbl-btn--delete'}`}
                        onClick={() => handleDelete(p.id)}
                        title="Hapus produk"
                        id={`btn-tbl-delete-${p.id}`}
                      >
                        <IconTrash />
                        {deleteId === p.id ? 'Yakin?' : 'Hapus'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {filtered.length > 0 && (
                <tfoot>
                  <tr className="tfoot-total">
                    <td colSpan="7" className="tfoot-label">Total</td>
                    <td><span className="qty-chip">{filtered.reduce((a, c) => a + c.stock, 0)}</span></td>
                    <td></td>
                    <td className="tfoot-grand">{fmtRupiah(filtered.reduce((a, c) => a + c.stock * c.price, 0))}</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
          <div className="table-footer-info">
            Menampilkan <strong>{filtered.length}</strong> dari <strong>{products.length}</strong> produk
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProductModal
        isOpen={modalOpen}
        mode={modalMode}
        product={selectedProduct}
        onClose={() => { setModalOpen(false); setDeleteId(null); }}
        onSave={handleSave}
      />
    </div>
  );
}

// ── Category Product Data ─────────────────────────────────────────────────────
const INITIAL_CATEGORY_DATA = [
  { id: 1, code: 'CAT-001', name: 'Drum Besi', description: 'Kemasan drum berbahan besi/steel untuk bahan kimia non-korosif.', productCount: 2, status: 'Aktif' },
  { id: 2, code: 'CAT-002', name: 'Drum Plastik', description: 'Kemasan drum plastik HDPE tahan asam dan basa.', productCount: 2, status: 'Aktif' },
  { id: 3, code: 'CAT-003', name: 'Tempu Stainless', description: 'Kemasan tempu berbahan stainless steel, tahan korosi tinggi.', productCount: 1, status: 'Aktif' },
  { id: 4, code: 'CAT-004', name: 'Tempu Plastik', description: 'Kemasan tempu plastik polypropylene (PP), ringan dan ekonomis.', productCount: 1, status: 'Aktif' },
  { id: 5, code: 'CAT-005', name: 'Derigen HDPE', description: 'Derigen berbahan HDPE dengan gagang, untuk distribusi bahan kimia cair.', productCount: 1, status: 'Aktif' },
  { id: 6, code: 'CAT-006', name: 'Derigen Aluminium', description: 'Derigen aluminium tahan pelarut organik, segel aman.', productCount: 1, status: 'Aktif' },
  { id: 7, code: 'CAT-007', name: 'Jerigen', description: 'Jerigen HDPE serbaguna kapasitas kecil untuk penyimpanan bahan kimia.', productCount: 1, status: 'Aktif' },
  { id: 8, code: 'CAT-008', name: 'Pail', description: 'Pail besi/plastik untuk bahan kimia padat atau setengah padat.', productCount: 1, status: 'Nonaktif' },
];

// ── Category Modal ────────────────────────────────────────────────────────────
function CategoryModal({ isOpen, mode, category, onClose, onSave }) {
  const empty = { code: '', name: '', description: '', status: 'Aktif' };
  const [form, setForm] = useState(category || empty);

  React.useEffect(() => { setForm(category || empty); }, [category, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-icon"><IconDatabase /></span>
            <h2 className="modal-title">{mode === 'create' ? 'Tambah Kategori' : 'Edit Kategori'}</h2>
          </div>
          <button className="modal-close" onClick={onClose} id="btn-cat-modal-close"><IconX /></button>
        </div>

        <form onSubmit={e => { e.preventDefault(); onSave(form); }} className="modal-form">
          <div className="modal-body">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cat-code">Kode Kategori *</label>
                <input type="text" id="cat-code" name="code" value={form.code}
                  onChange={handleChange} placeholder="Contoh: CAT-009" required />
              </div>
              <div className="form-group">
                <label htmlFor="cat-status">Status</label>
                <select id="cat-status" name="status" value={form.status} onChange={handleChange}>
                  <option value="Aktif">Aktif</option>
                  <option value="Nonaktif">Nonaktif</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cat-name">Nama Kategori *</label>
              <input type="text" id="cat-name" name="name" value={form.name}
                onChange={handleChange} placeholder="Contoh: Drum Besi" required />
            </div>
            <div className="form-group">
              <label htmlFor="cat-desc">Deskripsi</label>
              <textarea id="cat-desc" name="description" value={form.description}
                onChange={handleChange} placeholder="Deskripsi kategori packaging..." rows={3} />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-outline" onClick={onClose}>Batal</button>
            <button type="submit" className="btn-primary" id="btn-save-category">
              <IconPlus /> {mode === 'create' ? 'Simpan Kategori' : 'Update Kategori'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Category Product Page ─────────────────────────────────────────────────────
function CategoryProduct({ categories, onAdd, onEdit, onDelete }) {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [selected, setSelected] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const filtered = categories.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus ? c.status === filterStatus : true;
    return matchSearch && matchStatus;
  });

  const openCreate = () => { setModalMode('create'); setSelected(null); setModalOpen(true); };
  const openEdit = (cat) => { setModalMode('edit'); setSelected(cat); setModalOpen(true); };

  const handleSave = (data) => {
    if (modalMode === 'create') {
      onAdd({ ...data, id: Date.now(), productCount: 0 });
    } else {
      onEdit({ ...selected, ...data });
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    if (deleteId === id) { onDelete(id); setDeleteId(null); }
    else setDeleteId(id);
  };

  const totalAktif = categories.filter(c => c.status === 'Aktif').length;
  const totalProduk = categories.reduce((a, c) => a + (c.productCount || 0), 0);

  return (
    <div className="page-wrapper">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Category Product</h1>
          <p className="page-subtitle">Master data kategori packaging bahan kimia</p>
        </div>
        <div className="page-actions">
          <button className="icon-btn icon-btn--ghost" onClick={handlePrint} id="btn-print-categories"><IconPrint /></button>
          <button className="btn-primary" onClick={openCreate} id="btn-create-category">
            <IconPlus /> Tambah Kategori
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="search-bar search-bar--wide">
          <IconSearch />
          <input type="text" placeholder="Cari kode, nama, deskripsi..."
            value={search} onChange={e => setSearch(e.target.value)}
            id="input-search-categories" />
        </div>
        <div className="filter-group">
          <IconFilter />
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} id="filter-category-status">
            <option value="">Semua Status</option>
            <option value="Aktif">Aktif</option>
            <option value="Nonaktif">Nonaktif</option>
          </select>
        </div>
        {(search || filterStatus) && (
          <button className="btn-clear-filter" onClick={() => { setSearch(''); setFilterStatus(''); }}>✕ Reset</button>
        )}
        <span className="filter-count">{filtered.length} kategori</span>
      </div>

      {/* Info bar */}
      <div className="cat-info-bar">
        <span className="cat-info-item">
          <span className="cat-info-dot cat-info-dot--green"></span>
          <strong>{totalAktif}</strong> kategori aktif
        </span>
        <span className="cat-info-sep">·</span>
        <span className="cat-info-item">
          <span className="cat-info-dot cat-info-dot--blue"></span>
          <strong>{totalProduk}</strong> total produk terdaftar
        </span>
        <span className="cat-info-sep">·</span>
        <span className="cat-info-item">
          <span className="cat-info-dot cat-info-dot--orange"></span>
          <strong>{categories.length - totalAktif}</strong> nonaktif
        </span>
      </div>

      {/* Table */}
      <div className="table-card">
        <div className="table-wrap">
          <table className="data-table inbound-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Kode</th>
                <th>Nama Kategori</th>
                <th>Deskripsi</th>
                <th style={{ textAlign: 'center' }}>Jml Produk</th>
                <th>Status</th>
                <th style={{ textAlign: 'center' }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="7" className="td-empty">
                    <div className="empty-state-inline">
                      <IconDatabase />
                      <p>Tidak ada kategori yang sesuai filter</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filtered.map((cat, idx) => (
                  <tr key={cat.id}>
                    <td className="td-num">{idx + 1}</td>
                    <td><code className="sku-code">{cat.code}</code></td>
                    <td className="td-name">{cat.name}</td>
                    <td className="cat-desc-cell">{cat.description}</td>
                    <td style={{ textAlign: 'center' }}>
                      <span className="qty-chip">{cat.productCount}</span>
                    </td>
                    <td>
                      <span className={`status-badge ${cat.status === 'Aktif' ? 'status--received' : 'status--pending'}`}>
                        {cat.status}
                      </span>
                    </td>
                    <td className="td-actions">
                      <button className="tbl-btn tbl-btn--edit" onClick={() => openEdit(cat)}
                        title="Edit kategori" id={`btn-edit-cat-${cat.id}`}>
                        <IconEdit /> Edit
                      </button>
                      <button
                        className={`tbl-btn ${deleteId === cat.id ? 'tbl-btn--confirm' : 'tbl-btn--delete'}`}
                        onClick={() => handleDelete(cat.id)}
                        title="Hapus kategori" id={`btn-delete-cat-${cat.id}`}>
                        <IconTrash /> {deleteId === cat.id ? 'Yakin?' : 'Hapus'}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            {filtered.length > 0 && (
              <tfoot>
                <tr className="tfoot-total">
                  <td colSpan="4" className="tfoot-label">Total</td>
                  <td style={{ textAlign: 'center' }}>
                    <span className="qty-chip">{filtered.reduce((a, c) => a + (c.productCount || 0), 0)}</span>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
        <div className="table-footer-info">
          Menampilkan <strong>{filtered.length}</strong> dari <strong>{categories.length}</strong> kategori
        </div>
      </div>

      <CategoryModal
        isOpen={modalOpen} mode={modalMode} category={selected}
        onClose={() => { setModalOpen(false); setDeleteId(null); }}
        onSave={handleSave}
      />
    </div>
  );
}

// ── Placeholder Page ──────────────────────────────────────────────────────────
function PlaceholderPage({ title }) {
  return (
    <div className="placeholder-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">Halaman ini sedang dalam pengembangan</p>
        </div>
        <button className="icon-btn" onClick={handlePrint} title="Print" id={`btn-print-${title.toLowerCase().replace(/ /g, '-')}`}>
          <IconPrint /><span>Print</span>
        </button>
      </div>
      <div className="empty-card">
        <div className="empty-illustration"><IconBox /></div>
        <p className="empty-title">{title}</p>
        <p className="empty-desc">Konten untuk halaman {title} akan ditambahkan di sini.</p>
      </div>
    </div>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
function Dashboard({ onLogout }) {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inboundData, setInboundData] = useState(INITIAL_INBOUND_DATA);
  const [productData, setProductData] = useState(INITIAL_PRODUCT_DATA);
  const [categoryData, setCategoryData] = useState(INITIAL_CATEGORY_DATA);

  const handleAddCategory = (c) => setCategoryData(prev => [...prev, c]);
  const handleEditCategory = (c) => setCategoryData(prev => prev.map(x => x.id === c.id ? c : x));
  const handleDeleteCategory = (id) => setCategoryData(prev => prev.filter(x => x.id !== id));

  const handleSaveInbound = (newItem) => {
    setInboundData(prev => [...prev, { ...newItem, id: Date.now() }]);
  };

  const handleAddProduct = (p) => setProductData(prev => [...prev, p]);
  const handleEditProduct = (p) => setProductData(prev => prev.map(x => x.id === p.id ? p : x));
  const handleDeleteProduct = (id) => setProductData(prev => prev.filter(x => x.id !== id));

  const getPageTitle = (key) => {
    const map = {
      dashboard: 'Dashboard', masterdata: 'Master Data',
      input_user: 'Input User', input_category_product: 'Category Product',
      input_product: 'Input Product', inbound: 'Inbound',
      input_inbound: 'Input Inbound', list_inbound: 'List Inbound',
      outbound: 'Outbound', report: 'Report',
    };
    return map[key] || key;
  };

  const handleMenuClick = (item) => {
    if (item.children) {
      setExpandedMenu(expandedMenu === item.key ? null : item.key);
    } else {
      setActiveMenu(item.key);
      setSidebarOpen(false);
    }
  };

  const isActive = (item) => {
    if (item.children) return item.children.some(c => c.key === activeMenu);
    return activeMenu === item.key;
  };

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard': return <DashboardHome inboundData={inboundData} />;
      case 'input_inbound': return <InputInbound onSave={handleSaveInbound} />;
      case 'list_inbound': return <ListInbound data={inboundData} />;
      case 'input_product': return <InputProduct products={productData} onAdd={handleAddProduct} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />;
      case 'outbound': return <PlaceholderPage title="Outbound" />;
      case 'report': return <PlaceholderPage title="Report" />;
      case 'input_user': return <PlaceholderPage title="Input User" />;
      case 'input_category_product': return <CategoryProduct categories={categoryData} onAdd={handleAddCategory} onEdit={handleEditCategory} onDelete={handleDeleteCategory} />;
      default: return <DashboardHome inboundData={inboundData} />;
    }
  };

  return (
    <div className="app-shell">
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      {/* ── Sidebar ── */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar-logo" onClick={() => { setActiveMenu('dashboard'); setSidebarOpen(false); }}>
          <div className="logo-icon"><IconBox /></div>
          <span className="logo-text">InvApp</span>
        </div>

        <nav className="sidebar-nav">
          {MENU_ITEMS.map(item => (
            <div key={item.key} className="nav-item-group">
              <button
                className={`nav-item ${isActive(item) ? 'nav-item--active' : ''}`}
                onClick={() => handleMenuClick(item)}
                id={`nav-${item.key}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                {item.children && (
                  <span className={`nav-chevron ${expandedMenu === item.key ? 'nav-chevron--open' : ''}`}>
                    <IconChevronDown />
                  </span>
                )}
              </button>
              {item.children && expandedMenu === item.key && (
                <div className="nav-sub">
                  {item.children.map(child => (
                    <button
                      key={child.key}
                      className={`nav-sub-item ${activeMenu === child.key ? 'nav-sub-item--active' : ''}`}
                      onClick={() => { setActiveMenu(child.key); setSidebarOpen(false); }}
                      id={`nav-${child.key}`}
                    >
                      {child.key.includes('input') || child.key === 'input_inbound'
                        ? <><IconPlus />&nbsp;</>
                        : <><IconList />&nbsp;</>
                      }
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="avatar">A</div>
            <div className="user-details">
              <span className="user-name">Admin</span>
              <span className="user-role">Administrator</span>
            </div>
          </div>
          <button className="logout-btn" onClick={onLogout} title="Logout" id="btn-logout">
            <IconLogout />
          </button>
        </div>
      </aside>

      {/* ── Main Area ── */}
      <div className="main-area">
        <header className="topbar">
          <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)} id="btn-hamburger">
            <span></span><span></span><span></span>
          </button>
          <div className="topbar-breadcrumb">
            <span className="breadcrumb-root">InvApp</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{getPageTitle(activeMenu)}</span>
          </div>
          <div className="topbar-right">
            <div className="search-bar search-bar--topbar">
              <IconSearch />
              <input type="text" placeholder="Cari..." id="input-search-topbar" />
            </div>
            <button className="icon-btn icon-btn--ghost" title="Notifikasi" id="btn-notifications">
              <IconBell />
              <span className="notif-dot"></span>
            </button>
            <div className="topbar-avatar">A</div>
          </div>
        </header>

        <main className="content-area">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
