const PageNotFound = () => {
    function Volver() {
        window.history.back()
    }
    function abrirNuevoTab() {
        var url = "https://www.youtube.com/watch?v=G3AfIvJBcGo"
        // Abrir nuevo tab
        var win = window.open(url, '_blank');
        // Cambiar el foco al nuevo tab (punto opcional)
        win.focus();
    }
    return (
        <>
            <body>
                <section className="notFound">

                    <div className="img">
                        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
                        <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
                    </div>
                    <div className="text">
                        <h3>BACK TO HOME?</h3>
                        <button onClick={Volver} className="btn btn-primary">YES</button>
                        <button onClick={abrirNuevoTab} className="btn btn-secondary">NO</button>
                    </div>
                </section>
            </body></>)
}
export default PageNotFound;