import React, { Component } from 'react';
import PersonItems from './PersonItems';


class PersonList extends Component {
    
    render() { 
     
        const  personList=[
            'masoud',
            'sheila',
            'amir',
        ]
        return ( 
            <div>
                {
                    personList.map( person => (
                        <div >
                            <PersonItems key={person} person={person}/>
                        </div>
                    ))
                    }
            </div>
         );
    }
}
 
export default PersonList;