import { FOOTER_NAV_MENU } from "../../constants/data";


export default function NavBlock() {
    return (
        <nav role='navigation'>
            {FOOTER_NAV_MENU.map((list, listIdx) =>
                <div key={listIdx}>
                    <h3>{list.name}</h3>
                    <ul>
                        {list.children.map((children, childIdx) =>
                            <li key={childIdx}>
                                {children.name}
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </nav>

    );
}