import styled from "@emotion/styled";

export const StTable = styled.div`
    width: 97vw;
    overflow-x: scroll;
    
    table {
        border-spacing: 0 5px;
        padding: 0 10px 0 10px;
        
    }
    table thead tr th,
    table thead tr td,
    table tbody tr th,
    table tbody tr td {
	    vertical-align: middle;
	   
    }
    table tbody tr {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        height: 70px;     
    }
    table tbody tr td {
        background: #fff;
        padding: 0 20px 0 20px;     
    }
    table tbody tr td:nth-last-of-type(1) {
        border-radius: 5px 0 0 5px;
    }
    table tbody tr td:nth-last-of-type(1) {
        border-radius: 0 5px 5px 0;
    }
    table th{
        text-align: center;
        width: 100%;
        color: #A9A9A9;
    }
    table td{
        text-align: center;
        border: 0.3px solid #ddd;
        width: 100%;
    } 

    
`;

export const StSearch = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 10px 30px 30px 0;
`;

export const StTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-weight:bold;
    font-size: 25px;
    margin: 30px 30px 0px 30px;
`;

export const StEdit = styled.button`
    background-color: #007FFF;
    border-radius: 5px;
    border: none;
    color: white;
    padding: 10px 30px 10px 30px;

    :hover{
        background-color: #104E8B;
    }

`;


