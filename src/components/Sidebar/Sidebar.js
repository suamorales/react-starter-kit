/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import Paper from 'material-ui/Paper';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import Header from '../Header';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import FlatButton from 'material-ui/FlatButton';

class Sidebar extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Drawer>
        <ListItem
          primaryText="Home"
          value="/components/auto-complete"
          href="#/components/auto-complete"
        />
        <ListItem
          primaryText="Projects"
          value="/projects"
          href="/projects"
        />
        <ListItem
          primaryText="Explore"
          value="/components/auto-complete"
          href="#/components/auto-complete"
        />
        <ListItem
          primaryText="YOUTH Cities"
          value="/components/auto-complete"
          href="#/components/auto-complete"
        />
        <ListItem
          primaryText="Sign Out"
          value="/components/auto-complete"
          href="#/components/auto-complete"
        />
      </Drawer>
    );
  }
}

export default Sidebar;
