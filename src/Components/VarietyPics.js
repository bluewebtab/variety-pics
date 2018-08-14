import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


function VarietyPics(props){
  console.log(props)
  return <div>
      <Link className = "addIcon" to = "/AddPhoto">  </Link>
      <div className = "photo-grid">
      {props.posts
        .sort(function(x,y){
          return y.id - x.id
        })
        .map((post, index) => <Photo key={post.id} post = {post} {...props} index = {index}/> )}

       </div>
 </div>
}

VarietyPics.propTypes = {
  posts:PropTypes.array.isRequired
}

export default VarietyPics