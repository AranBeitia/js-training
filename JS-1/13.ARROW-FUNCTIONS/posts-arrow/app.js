const cargarPost = document.querySelector('#cargar');

cargarPost.addEventListener('click', cargarAPI);

function cargarAPI() {
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(res => res.json())
	.then(data => {
		let contenido = `<h2>Nombres generados</h2>`;
		contenido += `<ul class="lista">`;

		data.forEach(post => {
			contenido += `
			<li>
				<h3>${post.title}</h3>
				<span>${post.body}</span>
			</li>
		`;
		})
		contenido +=	`</ul>`;
		document.getElementById('listado').innerHTML = contenido;
	})
	.catch(error => console.log(error))
}
