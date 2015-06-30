import React from 'react';
import cx from 'classnames';

export default class CardMedia extends React.Component {
  render() {
    const classes = cx({
      'sui-card__media': this.props.multimediaUrl,
      'sui-card__media--no-picture': !this.props.multimediaUrl
    });

    return (
      <div className={classes}>
        <img src={this.props.multimediaUrl} />
      </div>
    );
  }
}

CardMedia.propTypes = {multimediaUrl: React.PropTypes.string};