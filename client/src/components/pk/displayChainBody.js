import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import lodash from 'lodash';
import { map, tail, times, uniq } from 'lodash';
import moment from 'moment';
import { getChain } from '../../actions/pranithActions';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { dateFilter,textFilter,numberFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit';
//import './pk/blockchain.scss';
import './bootstrap.scss';
import './react-bootstrap-table-all.min.scss'
import { Link } from 'react-router-dom';

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;
const imgStyle = {
    height: '40px',
    width: '40px',

};
const axios = require('axios');
const columns = [{
    dataField: 'sender',
    text: 'Sender',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'recepient',
    text: 'Recipient',
    sort: true,
    filter:textFilter()
},{
    dataField: 'amount',
    text: 'Amount',
    sort: true,
    filter:numberFilter()
}, {
    dataField: 'timestamp',
    text: 'Transaction Date',
    filter: dateFilter()
}];


class DisplayChainBody extends Component {
    /* componentWillMount(){

         if(this.props.user.isLoggedIn==true)
         {
            console.log("User Email............",this.props.user.user.email);
            var values={username:this.props.user.user.email, status:"open", pagename:"Movietime"};

            const request =axios.post('http://localhost:3001/movietheatres/usertrack',values)
            .then(response => {
                console.log("sucessss",response.data)
            }).catch(error => {
                console.log("usertracking error",error);
            });

         }
     } */






    state = {
        movieSearch: '',
        Date: moment(new Date()).format(),
        transactionArray:[]
    };

    // combineTranArrays() {
    //     console.log("adding arrays");
    //     let a=[];
    //     for (let i=0; i < this.props.blockchainTransactions.chain.length; i++) {
    //         a.push( this.props.blockchainTransactions.chain[i].transactions);
    //     }
    //     let tempArray= this.state.transactionArray;
    //     tempArray.push(a);
    //     //this.setState({transactionArray:tempArray});
    //     console.log(this.state.transactionArray)
    // }


    renderDates() {
        const arrayDates = [];

        for (let i = 0; i < 15; i++) {
            const newDate = new Date();
            newDate.setDate(newDate.getDate() + i);
            arrayDates.push(newDate);
            // console.log(newDate);
        }
        return (_.map(arrayDates, Date => (
            <div key={Date}>

                <div
                    className="background-white text-center carousel-date"
                    onClick={() => {
                        this.setDate(moment(Date).format());
                    }}
                >

                    <span className="font-timesNewRoman font-size-15">{moment(Date).format('ddd')}</span>
                    <br />
                    <h3 className="color-darkgray mt-2 font-condensed-bold">{moment(Date).format('MMM')}</h3>
                    <h2 className="color-darkgray pb-2 font-condensed-bold">{moment(Date).format('DD')}</h2>
                </div>
            </div>
        )));
    }

    componentDidMount() {

        // if(this.props.blockchainTransactions.chain != 0){
        //     this.combineTranArrays();
        // }
        console.log("did mount");
        console.log(this.props.blockchainTransactions.chain);

    }
    componentWillMount() {

    }

    render() {
        console.log('from render block');
        console.log(this.props.blockchainTransactions.chain);

        const settings = {
            slidesToShow: 7,
            slidesToScroll: 3,
            infinite: false,
        };
        const right_align=
            {"padding-left":"96%"
            };


        if (1 === 1) {
            return (
                <div className="col-12">

                    { (this.props.blockchainTransactions!=null)?(

                        <ToolkitProvider
                        keyField="_id"
                        data={this.props.blockchainTransactions.chain}
                        columns={ columns }
                        exportCSV={ { onlyExportFiltered: true, exportAll: false } }
                        search
                        >
                    {
                        props => (
                        <div className="col-11">
                        <ExportCSVButton style={right_align} { ...props.csvProps }>
                            <img style={imgStyle}  src={require('../../assets/microsoft-excel-512.png')} />
                        </ExportCSVButton>
                        <hr />
                        <SearchBar { ...props.searchProps } />
                        <BootstrapTable
                        { ...props.baseProps }
                        pagination={ paginationFactory() }
                        filter={ filterFactory() }
                        />
                        </div>
                        )
                    }
                        </ToolkitProvider>

                        )
                        :(<div>Empty</div>)

                    }

                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {       login:state.login,
        blockchainTransactions: state.blockchainTransactions,
        accessRules:state.accessRules
    };
}

export default connect(mapStateToProps, { getChain })(DisplayChainBody);

