<?php
/**
 * Return nav-here if current path begins with this path.
 *
 * @param string $path
 * @return string
 */
function setActiveMenu($path)
{
    return Request::is($path . '*') ? ' class=tg-active' :  '';
}

?>