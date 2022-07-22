import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useRef , useState } from "react";
import editFill from "@iconify/icons-eva/edit-fill";
import { Link as RouterLink } from "react-router-dom";
import trash2Outline from "@iconify/icons-eva/trash-2-outline";
import moreVerticalFill from "@iconify/icons-eva/more-vertical-fill";
// material
import { IconButton , ListItemIcon , ListItemText , Menu , MenuItem } from "@mui/material";
import { PATH_DASHBOARD } from "../../../routes/paths";
// routes

// ----------------------------------------------------------------------

MoreMenu.propTypes = {
  onDelete: PropTypes.func,
  productName: PropTypes.string
};

export default function MoreMenu({ onDelete, link }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={onDelete} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={trash2Outline} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="حذف" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem
          component={RouterLink}
          to={link}
          sx={{ color: 'text.secondary' }}
        >
          <ListItemIcon>
            <Icon icon={editFill} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="ویرایش" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
