import React , {useEffect , useState, useContext} from 'react'
import SearchBar from "material-ui-search-bar";
import {Loading , ProjectCard} from './index';
import Wrapper from "../assets/wrappers/UsersContainer"
import { AppContext } from '../context/appContext';


function ProjectContainer() {
    const {projects , getProjects , totalProjects , isLoading } = useContext(AppContext)
    const [cards , setCards] = useState(projects)
    const [searched, setSearched] = useState("");
    useEffect(()=>{
        getProjects()
        setCards(projects)
        // eslint-disable-next-line 
      } , [] )
      useEffect(()=>{
        setCards(projects)
    } , [projects] )
    const requestSearch = (searchedVal) => {
        const filteredCards = projects.filter((card) => {
        return card.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setCards(filteredCards);
    };
    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    if (isLoading) {
        return <Loading center />;
    }

    return (
        <Wrapper>
            <SearchBar
            style={{height: "55px"}}
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()} 
            placeholder = "Enter Project Name"
            className='mb-3'
            />
            {
                cards.length === 0 ?<h2>No Projects to display...</h2> : <h5>{totalProjects} project{projects.length > 1 && "s"} found</h5>
            }
            <div className='project-section'>
                <div className='project-container'>
                    {cards.map((project) => {
                        return(
                        <ProjectCard key={project._id} {...project} />
                        )
                    })}
                </div>
            </div>
        </Wrapper>

  )
}

export default ProjectContainer