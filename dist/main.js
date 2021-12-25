(()=>{"use strict";const e=new class{constructor(){this.myLibrary=[]}addBookToLibrary(e,t,r,a){const o=new class{constructor(e,t,r,a){this.title=e,this.author=t,this.pages=r,this.read=a}info(){return`${this.title} by ${this.author}, ${this.read} pages, ${this.read?"already read":"not read yet"}`}toggleReadStatus(){this.read=!this.read}}(e,t,r,a);return this.myLibrary.push(o),o}makeBookCard(e){const t=document.querySelector(".container"),r=document.createElement("div");r.classList.add("card");const a=document.createElement("h2");a.textContent=e.title;const o=document.createElement("p");o.textContent=e.author;const n=document.createElement("p");n.textContent=`${e.pages} Pages`;const d=document.createElement("button");d.textContent=e.read?"Already read":"Not read yet",d.addEventListener("click",(()=>{e.toggleReadStatus(),d.textContent=e.read?"Already read":"Not read yet"}));const i=document.createElement("button");return i.textContent="Remove",i.addEventListener("click",(()=>{this.myLibrary=this.myLibrary.filter((t=>t!=e)),t.removeChild(r)})),r.appendChild(a),r.appendChild(o),r.appendChild(n),r.appendChild(d),r.appendChild(i),r}display(e){document.querySelector(".container").appendChild(this.makeBookCard(e))}displayAllBooks(){this.myLibrary.forEach((e=>this.display(e)))}};e.addBookToLibrary("The Hobbit","J.R.R. Tolkien",295,!1),e.displayAllBooks(),document.querySelector("#new").addEventListener("click",(()=>{document.querySelector("form").classList.toggle("hidden")})),document.querySelector("form").onsubmit=function(t){t.preventDefault();const r=document.querySelector("input[name='title']").value,a=document.querySelector("input[name='author']").value,o=document.querySelector("input[name='pages']").value,n=document.querySelector("select[name='read']").value,d=e.addBookToLibrary(r,a,o,"yes"==n);e.display(d)}})();