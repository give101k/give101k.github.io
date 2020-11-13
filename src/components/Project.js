import React from 'react';

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    fetch('https://quiet-everglades-10935.herokuapp.com/websites/all')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data
        });
      });
  }

  render() {
    let data = this.state.data;
    let github = "";
    return (
      <main className="page projects-page">
        <section className="portfolio-block projects-cards">
          <div className="container">
            <div className="heading">
              <h2>Recent Work</h2>
            </div>
            <div className="row">
              {data.map(card => (
                <div className="col-md-6 col-lg-4">
                  <div className="card border-0">
                    <a href={card.url}><img className="card-img-top scale-on-hover" src={card.img_url} alt="Card Image" /></a>
                    <div className="card-body">
                      <h6><a href={card.Url}>{card.website}</a></h6>
                      <p className="text-muted card-text">{card.des} The code is on <a href={card.github_url}>github</a>.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Project;