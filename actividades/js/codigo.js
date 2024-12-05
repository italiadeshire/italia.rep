$(document).ready(function () {
    console.log("Script cargado correctamente.");

    const totalLessons = 20; // Número de lecciones
    const $tableBody = $('#lesson-table'); // Selecciona el cuerpo de la tabla

    for (let i = 1; i <= totalLessons; i++) {
        const lessonRow = `
            <tr>
                <td>${i}</td>
                <td><a href="/leccion${i}" class="text-decoration-none">Lección ${i}</a></td>
            </tr>
        `;
        $tableBody.append(lessonRow);
    }

    console.log("Tabla generada.");
});
