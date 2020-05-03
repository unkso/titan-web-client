import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import {
    ChainOfCommand,
    Organization,
    TitanApiClient
} from "@titan/http/api";
import {DashboardSection} from "@titan/layouts/dashboard/dashboard_section";
import {useDispatch, useSelector} from "react-redux";
import {
    OrganizationActions,
    organizationChainOfCommandSelector,
    organizationChildrenSelector,
    organizationModelSelector
} from "@titan/store/organization";
import {combineLatest} from "rxjs";
import {HorizontalScrollViewport} from "@titan/components/scroll/horizontal_scroll_viewport";
import {AppState} from "@titan/store/root_reducer";
import {OrganizationCard} from "@titan/components/organizations/organization_card";
import {Avatar, useTheme} from "@material-ui/core";
import {Roles} from "@titan/modules/organizations/detail/roles";
import {AddRoleButton} from "@titan/components/roles/add_role_button";
import {DashboardSectionHeader} from "@titan/layouts/dashboard/dashboard_section_header";

const StyledOrganizationHeader = styled.div`
  align-items: flex-end;
  background: linear-gradient(to bottom, ${props => props.blendcolor} 0%, transparent 15%, transparent 50%, ${props => props.blendcolor} 100%), url(${props => props.image}) no-repeat center;
  background-size: cover;
  display: flex;
  height: 95vh;
  margin-top: -85px;
`;

const StyledViewportWrapper = styled.div`
  margin-top: -72px;
`;

const StyledOrganizationDetailsWrapper = styled.div`
  margin-top: 24px;
`;

const StyledAvatar = styled(Avatar)`
  height: 3.5rem;
  margin-right: 8px;
  width: 3.5rem;
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(-24);
  }

  50% {
    transform: translateY(16px);
  }

  100% {
    transform: translateY(0px);
  }
`;

const StyledHeadline = styled.div`
  align-content: space-between;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -48px;

  h1 {
    font-size: 3.5rem;
    display: flex;
    position: relative;
  }
  
  .scroll-indicator {
    animation: ${floatAnimation} 1600ms ease-in-out infinite;
    color: ${props => props.indicatorColor};
    font-size: 3.5rem;
  }
`;

export function OrganizationScene() {
    const params = useParams();
    const dispatch = useDispatch();
    const theme = useTheme();
    const chainOfCommand = useSelector<AppState, ChainOfCommand[]>(organizationChainOfCommandSelector);
    const children = useSelector<AppState, Organization[]>(organizationChildrenSelector);
    const organization = useSelector<AppState, Organization>(organizationModelSelector);

    useEffect(() => {
        combineLatest([
            TitanApiClient.getOrganization({id: params.id}),
            TitanApiClient.getOrganizationChainOfCommand({orgId: params.id}),
            TitanApiClient.getOrganizationChildren({orgId: params.id}),
            TitanApiClient.getOrganizationsIdUsers({orgId: params.id})
        ]).subscribe(([org, coc, children, users]) => {
            dispatch(OrganizationActions.setOrganization(org));
            // dispatch(OrganizationActions.setChainOfCommand(coc));
            dispatch(OrganizationActions.setChildren(children));
            dispatch(OrganizationActions.setMembers(users));
        });

        return () => {
            dispatch(OrganizationActions.setOrganization(undefined));
            // dispatch(OrganizationActions.setChainOfCommand(coc));
            dispatch(OrganizationActions.setChildren([]));
            dispatch(OrganizationActions.setMembers([]));
        }
    }, [params]);

    if (!organization) {
        return null;
    }

    return (
        <React.Fragment>
            <StyledOrganizationHeader
                image={organization.bannerImageUrl}
                blendcolor={theme.palette.background.default}>
                <DashboardSection>
                    <StyledHeadline indicatorColor={theme.palette.primary.main}>
                        <h1>
                            <StyledAvatar src={organization.avatarUrl} />
                            <span>{organization.name}</span>
                        </h1>
                        <div className="scroll-indicator">
                            <i className="far fa-angle-double-down" />
                        </div>
                    </StyledHeadline>
                </DashboardSection>
            </StyledOrganizationHeader>
            {children.length > 0 && (
                <StyledViewportWrapper>
                    <HorizontalScrollViewport transparent>
                        {children.map(child => (
                            <OrganizationCard
                                organization={child}
                                key={child.id}
                                size="sm"
                            />
                        ))}
                    </HorizontalScrollViewport>
                </StyledViewportWrapper>
            )}
            <StyledOrganizationDetailsWrapper>
                <DashboardSection>
                    <DashboardSectionHeader actions={[
                        <AddRoleButton key="add-role-action" orgId={organization.id} />
                    ]}>Leadership</DashboardSectionHeader>
                    <Roles orgId={organization.id} />
                </DashboardSection>
            </StyledOrganizationDetailsWrapper>
        </React.Fragment>
    );
}
