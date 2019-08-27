import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import {
  AddUserToOrganizationRequest,
  makeTitanApiRequest
} from 'titan/http/ApiClient';
import ListItem from '@material-ui/core/ListItem';
import Column from 'titan/components/Grid/Column';
import Avatar from '@material-ui/core/Avatar';
import Row from 'titan/components/Grid/Row';
import { Typography } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { SearchMembersForm } from 'titan/components/members/form/SearchMembersForm';

/**
 * @param {{orgId, orgCoc, users}} props
 */
export function AddMembersForm (props) {
  const [addedUsers, setAddedUsers] = useState([]);
  const snackbar = useSnackbar();

  useEffect(() => {
    setAddedUsers(props.users.map(user => user.id)
      .concat(props.orgCoc.map(role => role.user_profile.id)));
  }, [props.users]);

  // TODO Handle users already assigned to role in COC.
  function addMember (userId) {
    makeTitanApiRequest(AddUserToOrganizationRequest, { orgId: props.orgId, userId })
      .then(() => {
        setAddedUsers([...addedUsers, userId]);
        snackbar.enqueueSnackbar('Member added', {
          variant: 'success'
        });
      })
      .catch(() => {
        snackbar.enqueueSnackbar('Unable to add member', {
          variant: 'error'
        });
      });
  }

  return (
    <SearchMembersForm itemRenderer={(user, index) => (
      <ListItem button component="div" key={index}>
        <Row alignItems="center" alignContent="center">
          <Column>
            <Avatar
              component="div"
              style={{ width: 20, height: 20 }}
              src={user.wcf.avatar_url}
            />
          </Column>
          <Column>{user.username}</Column>
          <Column grow={1}>
            <Typography align="right">
              {addedUsers.includes(user.id) ? (
                <Button disabled color="primary">Added</Button>
              ) : (
                <Button
                  color="primary"
                  onClick={() => addMember(user.id)}>Add</Button>
              )}
            </Typography>
          </Column>
        </Row>
      </ListItem>
    )}
    />
  );
}
