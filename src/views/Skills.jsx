import React from "react";

function Skills() {
  return (
    <section id="services" className="services">
      <div className="services__title flex flex-column gap-3 text-center">
        <h1 className="text-3xl md:text-5xl">Conocimiento</h1>
        {/* <!-- <p className="text-gray-400 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum odit
        ab mollitia optio quod recusandae placeat aliquam veniam officiis
        cum quam eum architecto quidem, nobis commodi consequatur distinctio
        ullam non.
      </p> --> */}
      </div>

      <div className="services__card w-full grid grid-nogutter mt-7">
        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-brands fa-js"></i>
          </div>
          <div className="service__name">
            <p>JavaScript</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-brands fa-react"></i>
          </div>
          <div className="service__name">
            <p>React.js</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-brands fa-sass"></i>
          </div>
          <div className="service__name">
            <p>SASS</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-brands fa-bootstrap"></i>
          </div>
          <div className="service__name">
            <p>Bootstrap</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-brands fa-html5"></i>
          </div>
          <div className="service__name">
            <p>HTML</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-brands fa-css3-alt"></i>
          </div>
          <div className="service__name">
            <p>CSS</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-solid fa-code icono-color"></i>
          </div>
          <div className="service__name">
            <p>DOM</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-brands fa-node"></i>
          </div>
          <div className="service__name">
            <p>Node.js</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-solid fa-code icono-color"></i>
          </div>
          <div className="service__name">
            <p>Express</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-solid fa-database icono-color"></i>
          </div>
          <div className="service__name">
            <p>PostgreSQL</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-solid fa-database icono-color"></i>
          </div>
          <div className="service__name">
            <p>MongoDB</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-solid fa-code-branch icono-color"></i>
          </div>
          <div className="service__name">
            <p>JWT</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-solid fa-code-pull-request icono-color"></i>
          </div>
          <div className="service__name">
            <p>Postman</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-brands fa-git-alt"></i>
          </div>
          <div className="service__name">
            <p>GIT</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-brands fa-github"></i>
          </div>
          <div className="service__name">
            <p>GitHub</p>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-4 xl:col-3 gap-3 p-2 card flex align-items-center">
          <div className="service__logo flex align-items-center justify-content-center">
            <i className="fa-solid fa-arrows-turn-to-dots icono-color"></i>
          </div>
          <div className="service__name">
            <p>Scrum</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
