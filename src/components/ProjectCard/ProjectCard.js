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
import FlatButton from 'material-ui/FlatButton';

class ProjectCard extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
  };

  render() {
    return (
        <Card>
            <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="https://pbs.twimg.com/profile_images/799357938662068224/m4_o6bGl.jpg"
            />
            <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
            <img src="https://bgcdn.s3.amazonaws.com/wp-content/uploads/2013/04/5-2-God-is-in-Nature.jpg" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
            </CardActions>
        </Card>
    );
  }
}

export default ProjectCard;
