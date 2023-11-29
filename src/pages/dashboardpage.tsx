import '../styles/dashboardpage.css';


/**
 * grid에 쓸 박스 1x1 , 1,
 */

const DashBoardPage = () => {
    return ( 
        <div className="dashboard_wrap">
            <div className='smbox1'></div>
            <div className='smbox2'></div>
            <div className='smbox3'></div>
            <div className='rightbox'></div>
            <div className='midbox'></div>
            <div className='botbox'></div>
        </div>
     );
}
 
export default DashBoardPage;