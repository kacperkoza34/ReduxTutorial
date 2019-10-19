import React from 'react';

const MoviesContainer = () =>
  <ul>
    {movies.list.map(movie => <li>{movie}</li>)}
  </ul>

export default connect(mapStateToProps)
