import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header/index'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
// import {rest} from 'msw'

class MovieItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id, 'diidididdidi')
    const jwtToken = Cookies.get('jwtToken')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(
      `https://apis.ccbp.in/movies-app/movies/${id}`,
      options,
    )
    const dataAsk = await response.json()
    const data = dataAsk.movie_details
    console.log(data, 'ASHJOKKUAMR')
    const spokenLanguagesArray = data.spoken_languages.map(item => ({
      englishName: item.english_name,
      id: item.id,
    }))

    const similarMovies = data.similar_movies.map(item => ({
      id: item.id,
      title: item.title,
      backdropPath: item.backdrop_path,
      posterPath: item.poster_path,
    }))

    const updatedData = {
      id: data.id,
      overview: data.overview,
      adult: data.adult,
      backDropPath: data.backdrop_path,
      budget: data.budget,
      releaseDate: data.release_date,
      runtime: data.runtime,
      title: data.title,
      voteAverage: data.vote_average,
      voteCount: data.vote_count,
      posterPath: data.poster_path,
      genres: data.genres,
      spokenLanguages: spokenLanguagesArray,
      similarMovies,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {...rest} = blogData

    return (
      <div className="blog-info">
        <Header />
        <h2 className="blog-details-title">{rest.title}</h2>
        <div className="author-details">
          <img
            className="author-pic"
            src={rest.backDropPath}
            alt={rest.author}
          />
          <p className="details-author-name">{rest.author}</p>
        </div>
        <p className="blog-content">{rest.content}</p>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
          }}
        >
          <div style={{marginRight: '10px'}}>
            <h1>Genres</h1>
            <div>
              {rest.genres.map(item => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
          </div>
          <div>
            <h1>Languages</h1>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {rest.spokenLanguages.map(item => (
                <p1 key={item.id}>{item.englishName}</p1>
              ))}
            </div>
          </div>
          <div>
            <h1>Budget</h1>
            {rest.budget}
          </div>
          <div>
            <h1>Rating Count</h1>
            {rest.voteCount}
          </div>
          <div>
            <h1>Release Date</h1>
            {rest.releaseDate}
          </div>
        </div>
        <div>
          <div>
            <h1>Similar Movies</h1>
            <div>
              {rest.similarMovies.map(item => (
                <img
                  src={item.posterPath}
                  alt={item.title}
                  key={item.id}
                  style={{height: '150px', width: '150px', marginRight: '10px'}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <div className="navBAr">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default MovieItemDetails
