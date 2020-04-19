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

import {
    OrganizationRole,
    UserProfile,
    WcfUserGroupOption,
} from './';

/**
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * @type {string}
     * @memberof InlineResponse200
     */
    token: string;
    /**
     * @type {UserProfile}
     * @memberof InlineResponse200
     */
    user: UserProfile;
    /**
     * @type {string}
     * @memberof InlineResponse200
     */
    wcfUsername: string;
    /**
     * @type {string}
     * @memberof InlineResponse200
     */
    wcfUserTitle: string;
    /**
     * @type {Array<WcfUserGroupOption>}
     * @memberof InlineResponse200
     */
    acl: Array<WcfUserGroupOption>;
    /**
     * @type {Array<OrganizationRole>}
     * @memberof InlineResponse200
     */
    roles: Array<OrganizationRole>;
}