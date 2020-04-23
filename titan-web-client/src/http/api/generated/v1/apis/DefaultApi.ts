// tslint:disable
/**
 * Titan
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI } from '../runtime';
import {
    AddOrganizationUserFields,
    AddUserExcuseFields,
    AuthWoltlabFields,
    ChainOfCommand,
    CreateOrganizationFields,
    DeleteOrganizationUserFields,
    EventType,
    InlineResponse200,
    Organization,
    OrganizationRoleWithAssoc,
    ReorderOrganizationRolesFields,
    ReportWithAssoc,
    UpdateOrganizationRole,
    UserEventExcuseWithAssoc,
    UserFileEntryType,
    UserFileEntryWithAssoc,
    UserOrganizationMembership,
    UserProfile,
    WcfUserGroupOption,
    WoltlabLoginResponse,
} from '../models';

export interface DeleteOrganizationUserRequest {
    orgId: number;
    deleteOrganizationUserFields: DeleteOrganizationUserFields;
}

export interface GetEventsEventTypesEventTypeIdRequest {
    eventTypeId: number;
}

export interface GetOrganizationRequest {
    id: number;
}

export interface GetOrganizationsFileEntriesRequest {
    organizations: string;
    fromStartDate: number;
    toStartDate: number;
}

export interface GetOrganizationsIdUsersRequest {
    id: number;
    children?: boolean;
}

export interface GetOrganizationsOrgIdChildrenRequest {
    orgId: number;
}

export interface GetOrganizationsOrgIdCocRequest {
    orgId: number;
}

export interface GetOrganizationsOrgIdReportsRequest {
    orgId: number;
}

export interface GetOrganizationsOrgIdRolesRequest {
    orgId: number;
    scope: number;
}

export interface GetOrganizationsOrgIdRolesUnrankedRequest {
    orgId: number;
}

export interface GetOrganizationsOrgIdUsersUserIdCocRequest {
    orgId: number;
    userId: number;
}

export interface GetOrganizationsRolesRoleIdParentRequest {
    roleId: number;
}

export interface GetOrganizationsSlugRequest {
    slug: number;
}

export interface GetUserRequest {
    userId: number;
}

export interface GetUserAclRequest {
    userId: number;
}

export interface GetUserFileEntriesRequest {
    userId: number;
}

export interface GetUserOrganizationsRequest {
    userId: number;
    member?: boolean;
    role?: boolean;
}

export interface GetUsersRequest {
    username?: string;
    limit?: number;
}

export interface GetUsersUserIdExcusesRequest {
    userId: number;
}

export interface PostAuthWoltlabRequest {
    authWoltlabFields: AuthWoltlabFields;
}

export interface PostOrganizationsOrgIdReportsRequest {
    orgId: number;
    createOrganizationFields: CreateOrganizationFields;
}

export interface PostOrganizationsOrgIdReportsReportIdAckRequest {
    orgId: number;
    reportId: number;
}

export interface PostOrganizationsOrgIdRolesRequest {
    orgId: number;
    updateOrganizationRole?: UpdateOrganizationRole;
}

export interface PostOrganizationsOrgIdRolesReorderRequest {
    orgId: number;
    reorderOrganizationRolesFields: ReorderOrganizationRolesFields;
}

export interface PostOrganizationsOrgIdRolesRoleIdRequest {
    orgId: number;
    roleId: number;
    updateOrganizationRole?: UpdateOrganizationRole;
}

export interface PostOrganizationsOrgIdUsersRequest {
    orgId: number;
    addOrganizationUserFields: AddOrganizationUserFields;
}

export interface PostUsersUserIdExcusesRequest {
    userId: number;
    addUserExcuseFields: AddUserExcuseFields;
}

/**
 * no description
 */
export class DefaultApi extends BaseAPI {

    /**
     * remove_user
     */
    deleteOrganizationUser = ({ orgId, deleteOrganizationUserFields }: DeleteOrganizationUserRequest): Observable<void> => {
        throwIfNullOrUndefined(orgId, 'deleteOrganizationUser');
        throwIfNullOrUndefined(deleteOrganizationUserFields, 'deleteOrganizationUser');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<void>({
            path: '/api/organizations/{org_id}/users'.replace('{org_id}', encodeURI(orgId)),
            method: 'DELETE',
            headers,
            body: deleteOrganizationUserFields,
        });
    };

    /**
     * get_authenticated_user
     */
    getAuthenticatedUser = (): Observable<UserProfile> => {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<UserProfile>({
            path: '/api/users/me',
            method: 'GET',
            headers,
        });
    };

    /**
     * list_event_types
     */
    getEventsEventTypes = (): Observable<Array<EventType>> => {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<Array<EventType>>({
            path: '/api/events/event-types',
            method: 'GET',
            headers,
        });
    };

    /**
     * get_event_type_by_id
     */
    getEventsEventTypesEventTypeId = ({ eventTypeId }: GetEventsEventTypesEventTypeIdRequest): Observable<EventType> => {
        throwIfNullOrUndefined(eventTypeId, 'getEventsEventTypesEventTypeId');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<EventType>({
            path: '/api/events/event-types/{event_type_id}'.replace('{event_type_id}', encodeURI(eventTypeId)),
            method: 'GET',
            headers,
        });
    };

    /**
     */
    getOrganization = ({ id }: GetOrganizationRequest): Observable<Organization> => {
        throwIfNullOrUndefined(id, 'getOrganization');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<Organization>({
            path: '/api/organizations/{id}'.replace('{id}', encodeURI(id)),
            method: 'GET',
            headers,
        });
    };

    /**
     * list_organizations
     */
    getOrganizations = (): Observable<Array<Organization>> => {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<Array<Organization>>({
            path: '/api/organizations',
            method: 'GET',
            headers,
        });
    };

    /**
     * list_organization_user_file_entries
     */
    getOrganizationsFileEntries = ({ organizations, fromStartDate, toStartDate }: GetOrganizationsFileEntriesRequest): Observable<Array<UserFileEntryWithAssoc>> => {
        throwIfNullOrUndefined(organizations, 'getOrganizationsFileEntries');
        throwIfNullOrUndefined(fromStartDate, 'getOrganizationsFileEntries');
        throwIfNullOrUndefined(toStartDate, 'getOrganizationsFileEntries');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'organizations': organizations,
            'from_start_date': fromStartDate,
            'to_start_date': toStartDate,
        };

        return this.request<Array<UserFileEntryWithAssoc>>({
            path: '/api/organizations/file-entries',
            method: 'GET',
            headers,
            query,
        });
    };

    /**
     * get_organization_users
     */
    getOrganizationsIdUsers = ({ id, children }: GetOrganizationsIdUsersRequest): Observable<Array<UserProfile>> => {
        throwIfNullOrUndefined(id, 'getOrganizationsIdUsers');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        const query: HttpQuery = {};

        if (children != null) { query['children'] = children; }

        return this.request<Array<UserProfile>>({
            path: '/api/organizations/{id}/users'.replace('{id}', encodeURI(id)),
            method: 'GET',
            headers,
            query,
        });
    };

    /**
     * get_child_organizations
     */
    getOrganizationsOrgIdChildren = ({ orgId }: GetOrganizationsOrgIdChildrenRequest): Observable<Array<Organization>> => {
        throwIfNullOrUndefined(orgId, 'getOrganizationsOrgIdChildren');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<Array<Organization>>({
            path: '/api/organizations/{org_id}/children'.replace('{org_id}', encodeURI(orgId)),
            method: 'GET',
            headers,
        });
    };

    /**
     * get_organization_coc
     */
    getOrganizationsOrgIdCoc = ({ orgId }: GetOrganizationsOrgIdCocRequest): Observable<ChainOfCommand> => {
        throwIfNullOrUndefined(orgId, 'getOrganizationsOrgIdCoc');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<ChainOfCommand>({
            path: '/api/organizations/{org_id}/coc'.replace('{org_id}', encodeURI(orgId)),
            method: 'GET',
            headers,
        });
    };

    /**
     * list_organization_reports
     */
    getOrganizationsOrgIdReports = ({ orgId }: GetOrganizationsOrgIdReportsRequest): Observable<Array<ReportWithAssoc>> => {
        throwIfNullOrUndefined(orgId, 'getOrganizationsOrgIdReports');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<Array<ReportWithAssoc>>({
            path: '/api/organizations/{org_id}/reports'.replace('{org_id}', encodeURI(orgId)),
            method: 'GET',
            headers,
        });
    };

    /**
     * list_organization_roles
     */
    getOrganizationsOrgIdRoles = ({ orgId, scope }: GetOrganizationsOrgIdRolesRequest): Observable<Array<OrganizationRoleWithAssoc>> => {
        throwIfNullOrUndefined(orgId, 'getOrganizationsOrgIdRoles');
        throwIfNullOrUndefined(scope, 'getOrganizationsOrgIdRoles');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'scope': scope,
        };

        return this.request<Array<OrganizationRoleWithAssoc>>({
            path: '/api/organizations/{org_id}/roles'.replace('{org_id}', encodeURI(orgId)),
            method: 'GET',
            headers,
            query,
        });
    };

    /**
     * get_organization_unranked_roles
     */
    getOrganizationsOrgIdRolesUnranked = ({ orgId }: GetOrganizationsOrgIdRolesUnrankedRequest): Observable<Array<OrganizationRoleWithAssoc>> => {
        throwIfNullOrUndefined(orgId, 'getOrganizationsOrgIdRolesUnranked');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<Array<OrganizationRoleWithAssoc>>({
            path: '/api/organizations/{org_id}/roles/unranked'.replace('{org_id}', encodeURI(orgId)),
            method: 'GET',
            headers,
        });
    };

    /**
     * get_organization_user_coc
     */
    getOrganizationsOrgIdUsersUserIdCoc = ({ orgId, userId }: GetOrganizationsOrgIdUsersUserIdCocRequest): Observable<ChainOfCommand> => {
        throwIfNullOrUndefined(orgId, 'getOrganizationsOrgIdUsersUserIdCoc');
        throwIfNullOrUndefined(userId, 'getOrganizationsOrgIdUsersUserIdCoc');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<ChainOfCommand>({
            path: '/api/organizations/{org_id}/users/{user_id}/coc'.replace('{org_id}', encodeURI(orgId)).replace('{user_id}', encodeURI(userId)),
            method: 'GET',
            headers,
        });
    };

    /**
     * get_all_unacknowledged_reports
     */
    getOrganizationsReportsUnacknowledged = (): Observable<Array<ReportWithAssoc>> => {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<Array<ReportWithAssoc>>({
            path: '/api/organizations/reports/unacknowledged',
            method: 'GET',
            headers,
        });
    };

    /**
     * get_parent_role
     */
    getOrganizationsRolesRoleIdParent = ({ roleId }: GetOrganizationsRolesRoleIdParentRequest): Observable<OrganizationRoleWithAssoc> => {
        throwIfNullOrUndefined(roleId, 'getOrganizationsRolesRoleIdParent');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<OrganizationRoleWithAssoc>({
            path: '/api/organizations/roles/{role_id}/parent'.replace('{role_id}', encodeURI(roleId)),
            method: 'GET',
            headers,
        });
    };

    /**
     * get_organization_by_slug
     */
    getOrganizationsSlug = ({ slug }: GetOrganizationsSlugRequest): Observable<Organization> => {
        throwIfNullOrUndefined(slug, 'getOrganizationsSlug');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<Organization>({
            path: '/api/organizations/{slug}'.replace('{slug}', encodeURI(slug)),
            method: 'GET',
            headers,
        });
    };

    /**
     * get_user
     */
    getUser = ({ userId }: GetUserRequest): Observable<UserProfile> => {
        throwIfNullOrUndefined(userId, 'getUser');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<UserProfile>({
            path: '/api/users/{user_id}'.replace('{user_id}', encodeURI(userId)),
            method: 'GET',
            headers,
        });
    };

    /**
     */
    getUserAcl = ({ userId }: GetUserAclRequest): Observable<Array<WcfUserGroupOption>> => {
        throwIfNullOrUndefined(userId, 'getUserAcl');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<Array<WcfUserGroupOption>>({
            path: '/api/users/{user_id}/acl'.replace('{user_id}', encodeURI(userId)),
            method: 'GET',
            headers,
        });
    };

    /**
     * list_user_file_entries
     */
    getUserFileEntries = ({ userId }: GetUserFileEntriesRequest): Observable<Array<UserFileEntryWithAssoc>> => {
        throwIfNullOrUndefined(userId, 'getUserFileEntries');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<Array<UserFileEntryWithAssoc>>({
            path: '/api/users/{user_id}/file-entries'.replace('{user_id}', encodeURI(userId)),
            method: 'GET',
            headers,
        });
    };

    /**
     * list_user_organizations
     */
    getUserOrganizations = ({ userId, member, role }: GetUserOrganizationsRequest): Observable<Array<UserOrganizationMembership>> => {
        throwIfNullOrUndefined(userId, 'getUserOrganizations');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        const query: HttpQuery = {};

        if (member != null) { query['member'] = member; }
        if (role != null) { query['role'] = role; }

        return this.request<Array<UserOrganizationMembership>>({
            path: '/api/users/{user_id}/organizations'.replace('{user_id}', encodeURI(userId)),
            method: 'GET',
            headers,
            query,
        });
    };

    /**
     * list_users
     */
    getUsers = ({ username, limit }: GetUsersRequest): Observable<Array<UserProfile>> => {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        const query: HttpQuery = {};

        if (username != null) { query['username'] = username; }
        if (limit != null) { query['limit'] = limit; }

        return this.request<Array<UserProfile>>({
            path: '/api/users',
            method: 'GET',
            headers,
            query,
        });
    };

    /**
     * list_unacknowledged_excuses
     */
    getUsersExcusesUnacknowledged = (): Observable<Array<UserEventExcuseWithAssoc>> => {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<Array<UserEventExcuseWithAssoc>>({
            path: '/api/users/excuses/unacknowledged',
            method: 'GET',
            headers,
        });
    };

    /**
     * list_user_file_entry_types
     */
    getUsersFileEntryTypes = (): Observable<Array<UserFileEntryType>> => {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<Array<UserFileEntryType>>({
            path: '/api/users/file-entry-types',
            method: 'GET',
            headers,
        });
    };

    /**
     * list_user_event_excuses
     */
    getUsersUserIdExcuses = ({ userId }: GetUsersUserIdExcusesRequest): Observable<Array<UserEventExcuseWithAssoc>> => {
        throwIfNullOrUndefined(userId, 'getUsersUserIdExcuses');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<Array<UserEventExcuseWithAssoc>>({
            path: '/api/users/{user_id}/excuses'.replace('{user_id}', encodeURI(userId)),
            method: 'GET',
            headers,
        });
    };

    /**
     * woltlab
     */
    postAuthWoltlab = ({ authWoltlabFields }: PostAuthWoltlabRequest): Observable<WoltlabLoginResponse> => {
        throwIfNullOrUndefined(authWoltlabFields, 'postAuthWoltlab');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<WoltlabLoginResponse>({
            path: '/api/auth/woltlab',
            method: 'POST',
            headers,
            body: authWoltlabFields,
        });
    };

    /**
     * create_organization_report
     */
    postOrganizationsOrgIdReports = ({ orgId, createOrganizationFields }: PostOrganizationsOrgIdReportsRequest): Observable<ReportWithAssoc> => {
        throwIfNullOrUndefined(orgId, 'postOrganizationsOrgIdReports');
        throwIfNullOrUndefined(createOrganizationFields, 'postOrganizationsOrgIdReports');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<ReportWithAssoc>({
            path: '/api/organizations/{org_id}/reports'.replace('{org_id}', encodeURI(orgId)),
            method: 'POST',
            headers,
            body: createOrganizationFields,
        });
    };

    /**
     * ack_organization_report
     */
    postOrganizationsOrgIdReportsReportIdAck = ({ orgId, reportId }: PostOrganizationsOrgIdReportsReportIdAckRequest): Observable<ReportWithAssoc> => {
        throwIfNullOrUndefined(orgId, 'postOrganizationsOrgIdReportsReportIdAck');
        throwIfNullOrUndefined(reportId, 'postOrganizationsOrgIdReportsReportIdAck');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<ReportWithAssoc>({
            path: '/api/organizations/{org_id}/reports/{report_id}/ack'.replace('{org_id}', encodeURI(orgId)).replace('{report_id}', encodeURI(reportId)),
            method: 'POST',
            headers,
        });
    };

    /**
     * create_organization_role
     */
    postOrganizationsOrgIdRoles = ({ orgId, updateOrganizationRole }: PostOrganizationsOrgIdRolesRequest): Observable<OrganizationRoleWithAssoc> => {
        throwIfNullOrUndefined(orgId, 'postOrganizationsOrgIdRoles');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<OrganizationRoleWithAssoc>({
            path: '/api/organizations/{org_id}/roles'.replace('{org_id}', encodeURI(orgId)),
            method: 'POST',
            headers,
            body: updateOrganizationRole,
        });
    };

    /**
     * reorder_roles
     */
    postOrganizationsOrgIdRolesReorder = ({ orgId, reorderOrganizationRolesFields }: PostOrganizationsOrgIdRolesReorderRequest): Observable<void> => {
        throwIfNullOrUndefined(orgId, 'postOrganizationsOrgIdRolesReorder');
        throwIfNullOrUndefined(reorderOrganizationRolesFields, 'postOrganizationsOrgIdRolesReorder');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<void>({
            path: '/api/organizations/{org_id}/roles:reorder'.replace('{org_id}', encodeURI(orgId)),
            method: 'POST',
            headers,
            body: reorderOrganizationRolesFields,
        });
    };

    /**
     * update_organization_role_fields
     */
    postOrganizationsOrgIdRolesRoleId = ({ orgId, roleId, updateOrganizationRole }: PostOrganizationsOrgIdRolesRoleIdRequest): Observable<OrganizationRoleWithAssoc> => {
        throwIfNullOrUndefined(orgId, 'postOrganizationsOrgIdRolesRoleId');
        throwIfNullOrUndefined(roleId, 'postOrganizationsOrgIdRolesRoleId');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<OrganizationRoleWithAssoc>({
            path: '/api/organizations/{org_id}/roles/{role_id}'.replace('{org_id}', encodeURI(orgId)).replace('{role_id}', encodeURI(roleId)),
            method: 'POST',
            headers,
            body: updateOrganizationRole,
        });
    };

    /**
     * add_user
     */
    postOrganizationsOrgIdUsers = ({ orgId, addOrganizationUserFields }: PostOrganizationsOrgIdUsersRequest): Observable<boolean> => {
        throwIfNullOrUndefined(orgId, 'postOrganizationsOrgIdUsers');
        throwIfNullOrUndefined(addOrganizationUserFields, 'postOrganizationsOrgIdUsers');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<boolean>({
            path: '/api/organizations/{org_id}/users'.replace('{org_id}', encodeURI(orgId)),
            method: 'POST',
            headers,
            body: addOrganizationUserFields,
        });
    };

    /**
     * save_user_event_excuse
     */
    postUsersUserIdExcuses = ({ userId, addUserExcuseFields }: PostUsersUserIdExcusesRequest): Observable<InlineResponse200> => {
        throwIfNullOrUndefined(userId, 'postUsersUserIdExcuses');
        throwIfNullOrUndefined(addUserExcuseFields, 'postUsersUserIdExcuses');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'x-api-key': this.configuration.apiKey('x-api-key') }), // api_key authentication
        };

        return this.request<InlineResponse200>({
            path: '/api/users/{user_id}/excuses'.replace('{user_id}', encodeURI(userId)),
            method: 'POST',
            headers,
            body: addUserExcuseFields,
        });
    };

}
