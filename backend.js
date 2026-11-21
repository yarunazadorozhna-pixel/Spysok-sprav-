// BACKEND - логіка і збереження
const Backend = {
  data: JSON.parse(localStorage.getItem('zavd') || '[]'),
  save(){ localStorage.setItem('zavd', JSON.stringify(this.data)) },
  dodaty(){
    const n = document.getElementById('nazva').value;
    if(!n) return alert('Введи назву!');
    this.data.push({
      nazva: n,
      data: document.getElementById('data').value,
      vazhlyvist: document.getElementById('vazhlyvist').value,
      skladnist: document.getElementById('skladnist').value,
      sesiya: document.getElementById('sesiya').value,
      zrobleno: false
    });
    document.getElementById('nazva').value = '';
    this.save(); Frontend.show();
  },
  toggle(i){ this.data[i].zrobleno = !this.data[i].zrobleno; this.save(); Frontend.show(); },
  del(i){ this.data.splice(i,1); this.save(); Frontend.show(); }
};
