/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
//import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    })).isRequired,
  };

  render() {
    return (
      <div >
        <div >
          <Row>
            <Col md={3}>
                <h2> Suggestions </h2>
              <ProjectCard />
            </Col>
            <Col md={9}>
                <h1> Upcoming </h1>
              <ProjectCard />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
