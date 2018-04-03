import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_lists';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDl_qLKPzi69FVMBOcdE6skELBX1ZvHHBM'
//Create a new component. This component should produce
// some HTML

class App extends Component{
   constructor(props) {
       super(props);
       this.state = { 
           videos: [],
           selectedVideo: null
        };
       YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
           this.setState({ 
               videos: videos,
               selectedVideo: videos[0]
            }); //Same that setState({ videos: videos })
       });   
   }
    
   render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList 
                    videos={this.state.videos}
                    onVideoSelect={this.setState({ selectedVideo })}
                />
            </div>
        );
   }      
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));