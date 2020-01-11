import React, { Component } from 'react';

import '../Components/Docs/Docs.scss';
import DocsMain from '../Components/Docs/DocsMain';
import navigation from '../data/navigation.json';

class Docs extends Component {

  scrollClick = e => {
    document
      .getElementById(e)
      .scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  render() {
    const navMap = navigation.map((e, i) => {
      return React.createElement(
        e.tag,
        { onClick: () => this.scrollClick(e.id), key: i, id: `${e.id}b` },
        e.name
      );
    });

    return (
      <main className="documentation" role="main">
        <aside className="navbar">
        {navMap}
        </aside>
        <DocsMain />
      </main>
    );
  }
}

export default Docs;
