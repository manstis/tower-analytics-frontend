import {
  global_palette_black_400,
  global_palette_blue_300,
  global_palette_gold_300,
  global_palette_green_300,
  global_palette_red_100,
} from '@patternfly/react-tokens';

import { Params } from '../Api/types';

export interface DefaultParamsProps {
  defaultParams: Params;
}

export const jobExplorer = {
  defaultParams: {
    attributes: [
      'id',
      'status',
      'job_type',
      'started',
      'finished',
      'elapsed',
      'created',
      'cluster_name',
      'org_name',
      'most_failed_tasks',
      'host_count',
      'host_task_count',
      'failed_host_count',
      'unreachable_host_count',
      'changed_host_count',
      'ok_host_count',
      'skipped_host_count',
    ],
    status: ['successful', 'failed'],
    quick_date_range: 'last_30_days',
    job_type: ['workflowjob', 'job'],
    org_id: [],
    cluster_id: [],
    template_id: [],
    inventory_id: [],
    sort_options: 'created',
    sort_order: 'desc',
    only_root_workflows_and_standalone_jobs: false,
    limit: '5',
    offset: '0',
  },
};

export const roi = {
  defaultParams: {
    status: ['successful'],
    org_id: [],
    cluster_id: [],
    template_id: [],
    inventory_id: [],
    quick_date_range: 'roi_last_year',
    job_type: ['job'],
    sort_options: 'template_productivity_score',
    sort_order: 'desc',
    start_date: undefined,
    end_date: undefined,
    limit: '6',
    offset: '0',
    only_root_workflows_and_standalone_jobs: true,
    attributes: [
      'elapsed',
      'host_count',
      'total_count',
      'total_org_count',
      'total_cluster_count',
      'successful_hosts_total',
      'successful_elapsed_total',
    ],
    group_by: 'template',
    group_by_time: false,
  },
};

export const organizationStatistics = {
  defaultParams: {
    status: [],
    org_id: [],
    quick_date_range: 'last_30_days',
    limit: '5',
    offset: '0',
    job_type: ['workflowjob', 'job'],
    cluster_id: [],
    template_id: [],
    inventory_id: [],
    start_date: null,
    end_date: null,
  },
};

export const clusters = {
  defaultParams: {
    status: ['successful', 'failed'],
    quick_date_range: 'last_30_days',
    job_type: ['workflowjob', 'job'],
    group_by_time: true,
    org_id: [],
    cluster_id: [],
    template_id: [],
    inventory_id: [],
    only_root_workflows_and_standalone_jobs: false,
  },
};

export const savingsPlanner = {
  defaultParams: {
    inventory_id: [],
    automation_status: [],
    category: [],
    frequency_period: [],
    name: '',
    limit: '10',
    offset: '0',
    sort_options: 'modified',
    sort_order: 'desc',
  },
};

export const notAuthorizedParams = {
  title: 'RBAC Access Denied',
  description:
    'User does not have privileges to perform this action. Contact your organization adminstrator(s) for more information.',
};

export const categoryColor = {
  ok: global_palette_green_300.value,
  passed: global_palette_green_300.value,
  unreachable: global_palette_black_400.value,
  unfinished: global_palette_black_400.value,
  changed: global_palette_gold_300.value,
  error: global_palette_black_400.value,
  failed: global_palette_red_100.value,
  skipped: global_palette_blue_300.value,
};

const expandedAttributes = [
  'average_host_task_count_per_host',
  'average_host_task_ok_count_per_host',
  'average_host_task_failed_count_per_host',
  'average_host_task_unreachable_count_per_host',
  'average_host_task_skipped_count_per_host',
  'successful_count',
  'failed_count',
  'error_count',
  'started',
  'finished',
  'elapsed',
  'created',
  'total_cluster_count',
  'total_org_count',
  'most_failed_tasks',
  'host_count',
  'host_task_count',
  'host_task_changed_count',
  'host_task_failed_count',
  'host_task_ok_count',
  'host_task_skipped_count',
  'host_task_unreachable_count',
  'failed_host_count',
  'unreachable_host_count',
  'changed_host_count',
  'ok_host_count',
  'skipped_host_count',
  'total_count',
];

const allDefaultParams: any = {
  reports: {
    defaultParams: {
      limit: '20',
      offset: '0',
      sort_options: 'slug',
      sort_order: 'asc',
      tags: [],
      name: '',
      description: '',
    },
    namespace: 'allReports',
  },
  aa_2_1_onboarding: {
    defaultParams: {
      limit: 6,
      offset: 0,
      attributes: ['host_task_count'],
      group_by: 'template',
      group_by_time: true,
      granularity: 'monthly',
      quick_date_range: 'last_6_months',
      sort_options: 'host_task_count',
      sort_order: 'desc',
      cluster_id: [],
      inventory_id: [],
      job_type: [],
      org_id: [],
      status: [],
      task_id: [],
      task_action_name: [
        'apt',
        'apt_key',
        'apt_repository',
        'assemble',
        'blockinfile',
        'copy',
        'cron',
        'csvfile',
        'debconf',
        'dnf',
        'dpkg_selections',
        'env',
        'fetch',
        'file',
        'fileglob',
        'find',
        'first_found',
        'gather_facts',
        'get_url',
        'getent',
        'git',
        'hostname',
        'include_vars',
        'ini',
        'iptables',
        'junit',
        'known_hosts',
        'lineinfile',
        'local',
        'package',
        'password',
        'pip',
        'replace',
        'rpm_key',
        'script',
        'service',
        'service_facts',
        'setup',
        'slurp',
        'stat',
        'subversion',
        'systemd',
        'sysvinit',
        'tempfile',
        'template',
        'tree',
        'unarchive',
        'unvault',
        'user',
        'yum',
        'yum_repository',
      ],
      task_action_id: [],
      template_id: [],
    },
  },
  hosts_changed_by_job_template: {
    defaultParams: {
      limit: 6,
      offset: 0,
      attributes: [
        'total_unique_host_count',
        'total_unique_host_changed_count',
      ],
      group_by: 'template',
      group_by_time: true,
      granularity: 'monthly',
      quick_date_range: 'last_6_months',
      sort_options: 'total_unique_host_count',
      sort_order: 'desc',
      cluster_id: [],
      inventory_id: [],
      job_type: [],
      org_id: [],
      status: [],
      template_id: [],
    },
  },
  automation_calculator: {
    defaultParams: {
      status: ['successful'],
      org_id: [],
      cluster_id: [],
      template_id: [],
      inventory_id: [],
      quick_date_range: 'roi_last_year',
      job_type: ['job'],
      sort_options: 'template_productivity_score',
      sort_order: 'desc',
      start_date: undefined,
      end_date: undefined,
      limit: '6',
      offset: '0',
      only_root_workflows_and_standalone_jobs: true,
      attributes: [
        'elapsed',
        'host_count',
        'total_count',
        'total_org_count',
        'total_cluster_count',
        'successful_hosts_total',
        'successful_elapsed_total',
      ],
      group_by: 'template',
      group_by_time: false,
    },
  },
  changes_made_by_job_template: {
    defaultParams: {
      limit: 6,
      offset: 0,
      attributes: [
        'host_count',
        'changed_host_count',
        'host_task_count',
        'host_task_changed_count',
      ],
      group_by: 'template',
      group_by_time: true,
      granularity: 'monthly',
      quick_date_range: 'last_6_months',
      sort_options: 'changed_host_count',
      sort_order: 'desc',
      cluster_id: [],
      inventory_id: [],
      job_type: [],
      org_id: [],
      status: [],
      template_id: [],
    },
  },
  host_anomalies: {
    defaultParams: {
      limit: 6,
      offset: 0,
      attributes: ['slow_hosts_count'],
      cluster_id: [],
      org_id: [],
      inventory_id: [],
      template_id: [],
      status: [],
      host_status: [],
      sort_options: 'average_duration_per_task',
      sort_order: 'desc',
      quick_date_range: 'slow_hosts_last_1_week',
      slow_host_view: 'templates_with_slow_hosts',
    },
  },
  hosts_by_organization: {
    defaultParams: {
      limit: 6,
      offset: 0,
      granularity: 'daily',
      quick_date_range: 'last_30_days',
      status: [],
      org_id: [],
      job_type: [],
      cluster_id: [],
      template_id: [],
      inventory_id: [],
      attributes: [
        'total_unique_host_count',
        'total_unique_host_changed_count',
      ],
      group_by: 'org',
      group_by_time: true,
      sort_options: 'total_unique_host_count',
      sort_order: 'desc',
    },
  },
  jobs_and_tasks_by_organization: {
    defaultParams: {
      limit: 6,
      offset: 0,
      granularity: 'daily',
      quick_date_range: 'last_30_days',
      status: [],
      org_id: [],
      job_type: [],
      cluster_id: [],
      template_id: [],
      inventory_id: [],
      attributes: ['total_count', 'host_task_count'],
      group_by: 'org',
      group_by_time: true,
      sort_options: 'total_count',
      sort_order: 'desc',
    },
  },
  module_usage_by_job_template: {
    defaultParams: {
      limit: 6,
      offset: 0,
      attributes: [
        'host_task_count',
        'host_task_changed_count',
        'host_task_ok_count',
        'host_task_failed_count',
        'host_task_unreachable_count',
        'total_count',
      ],
      group_by: 'template',
      group_by_time: true,
      granularity: 'monthly',
      quick_date_range: 'last_6_months',
      sort_options: 'host_task_count',
      sort_order: 'desc',
      cluster_id: [],
      inventory_id: [],
      job_type: [],
      org_id: [],
      status: [],
      task_action_id: [],
      template_id: [],
    },
  },
  module_usage_by_organization: {
    defaultParams: {
      limit: 6,
      offset: 0,
      attributes: [
        'host_task_count',
        'host_task_changed_count',
        'host_task_ok_count',
        'host_task_failed_count',
        'host_task_unreachable_count',
        'total_count',
      ],
      group_by: 'org',
      group_by_time: true,
      granularity: 'monthly',
      quick_date_range: 'last_6_months',
      sort_options: 'host_task_count',
      sort_order: 'desc',
      cluster_id: [],
      inventory_id: [],
      job_type: [],
      org_id: [],
      status: [],
      task_action_id: [],
      template_id: [],
    },
  },
  module_usage_by_task: {
    defaultParams: {
      limit: 6,
      offset: 0,
      attributes: [
        'host_task_count',
        'host_task_changed_count',
        'host_task_ok_count',
        'host_task_failed_count',
        'host_task_unreachable_count',
        'total_count',
      ],
      group_by: 'task',
      group_by_time: true,
      granularity: 'monthly',
      quick_date_range: 'last_6_months',
      sort_options: 'host_task_count',
      sort_order: 'desc',
      cluster_id: [],
      inventory_id: [],
      job_type: [],
      org_id: [],
      status: [],
      task_action_id: [],
      template_id: [],
    },
  },
  most_used_modules: {
    defaultParams: {
      limit: 6,
      offset: 0,
      attributes: [
        'host_task_count',
        'host_task_changed_count',
        'host_task_ok_count',
        'host_task_failed_count',
        'host_task_unreachable_count',
        'total_count',
      ],
      group_by: 'module',
      group_by_time: true,
      granularity: 'monthly',
      quick_date_range: 'last_6_months',
      sort_options: 'host_task_count',
      sort_order: 'desc',
      cluster_id: [],
      inventory_id: [],
      job_type: [],
      org_id: [],
      status: [],
      task_action_id: [],
      template_id: [],
    },
  },
  job_template_run_rate: {
    defaultParams: {
      limit: 6,
      offset: 0,
      attributes: ['failed_count', 'successful_count', 'total_count'],
      group_by: 'template',
      group_by_time: true,
      granularity: 'monthly',
      quick_date_range: 'last_6_months',
      sort_options: 'total_count',
      sort_order: 'desc',
      cluster_id: [],
      inventory_id: [],
      job_type: [],
      org_id: [],
      status: [],
      template_id: [],
    },
  },
  templates_explorer: {
    defaultParams: {
      limit: 6,
      offset: 0,
      attributes: [
        'total_count',
        'successful_count',
        'failed_count',
        ...expandedAttributes,
      ],
      group_by: 'template',
      group_by_time: false,
      granularity: 'monthly',
      quick_date_range: 'last_6_months',
      sort_options: 'total_count',
      sort_order: 'desc',
      cluster_id: [],
      inventory_id: [],
      job_type: [],
      org_id: [],
      status: [],
      template_id: [],
    },
  },
};

export const reportDefaultParams = (slug: string): DefaultParamsProps => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return allDefaultParams[slug].defaultParams as DefaultParamsProps;
};
