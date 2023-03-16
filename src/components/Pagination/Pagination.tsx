import PaginationStyles from "./Pagination.module.scss";

interface Props {
    totalItems: number;
    setCurrentPage: (page: number) => void;
    currentPage: number;
}

const Pagination: React.FC<Props> = ({ totalItems, setCurrentPage, currentPage }) => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalItems / 10); i++) {
        pages.push(i);
    }
    return (
        <div className={PaginationStyles.pagination}>
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo(0, 0);
                    }}
                    className={currentPage === page ? PaginationStyles.active : ""}
                    disabled={currentPage === page}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};
export default Pagination;
